/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';

export default function ApplianceOptions({
  modelStylesData,
  modelOptions,
  onModelSelection,
  onOptionSelection,
}) {
  const [expanded, setExpanded] = React.useState('panel1');

  console.log('modelOptions', modelOptions);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const loadNestedOptions = (optionData, setSelection, selectionId) => {
    return optionData?.map((item) => (
      <Box
        key={item.id}
        className="ModalInfo"
        onClick={() => setSelection(selectionId, item)}
      >
        <img
          className=""
          src={require('../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')}
          alt="Range"
        />
        <Typography variant="body2" textAlign="center">
          {item?.title}
        </Typography>
      </Box>
    ));
  };

  const loadOptions = () => {
    return modelOptions?.map((o, index) => {
      const panel = `panel${index + 2}`;
      return (
        <Accordion
          key={o.id}
          disableGutters
          elevation={0}
          square
          expanded={expanded === panel}
          onChange={handleChange(panel)}
        >
          <AccordionSummary>
            <Box className="ModalHeading">
              <img
                className=""
                src={require('../../assets/images/VisualizerIconSecond.png')}
                alt="Range"
              />
              <Typography variant="h6" textAlign="center">
                {o.text}
              </Typography>
              <a className="EditButton">SELECT</a>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className="ModalBox">
              <Box className="ModalContentBox">
                {loadNestedOptions(o.opt, onOptionSelection, o.id)}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return (
    <div>
      <Accordion
        disableGutters
        elevation={0}
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary>
          <Box className="ModalHeading">
            <img
              className=""
              src={require('../../assets/images/VisualizerIconSecond.png')}
              alt="Range"
            />
            <Typography variant="h6" textAlign="center">
              MODEL
            </Typography>
            <a className="EditButton">SELECT</a>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="ModalBox">
            <Box className="ModalContentBox">
              {loadNestedOptions(modelStylesData, onModelSelection, 'style')}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {loadOptions()}
    </div>
  );
}
