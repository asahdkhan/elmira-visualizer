/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import * as React from 'react';
// import { styles as classes } from './ApplianceOptions.styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import Image from '../DynamicImages';

export default function ApplianceOptions({
  modelStylesData,
  modelOptions,
  onModelSelection,
  onOptionSelection,
  selectedOptions,
}) {
  const [expanded, setExpanded] = React.useState('panel1');

  // console.log('modelOptions', modelOptions);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const loadNestedOptions = (optionData, setSelection, selectionId) => {
    return optionData?.map((item) => {
      // for (var key of Object.keys(item)) {
      //   if (Array.isArray(item[key])) {
      //     console.log('object', key);
      //   }
      // }

      if (typeof item?.usa === 'object') {
        item = {
          ...item,
          usa: item.priceOn
            ? item?.usa[selectedOptions?.[item.priceOn]?.id]
            : item?.usa[selectedOptions?.style?.id],
        };
      }

      return (
        <Box
          key={item.id}
          className="ModalInfo"
          onClick={() => setSelection(selectionId, item)}
        >
          {item.src && (
            <Tooltip placement="top" arrow title={item?.title || ''}>
              {item.src == 'css' ? (
                <div
                  className={`${item.id} ${
                    selectedOptions[selectionId]?.id === item.id ? 'Active' : ''
                  }`}
                />
              ) : (
                <Image
                  classes={
                    selectedOptions[selectionId]?.id === item.id ? 'Active' : ''
                  }
                  name={item.src}
                />
              )}
            </Tooltip>
          )}
          <Typography variant="body2" textAlign="center">
            {selectionId === 'style' ? item?.title : '$' + item?.usa}
          </Typography>
        </Box>
      );
    });
  };

  const loadOptions = () => {
    return modelOptions?.map((o, index) => {
      const panelIndex = modelStylesData ? 2 : 1;
      const panel = `panel${index + panelIndex}`;
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
              <Image classes="" name="images/VisualizerIconSecond.png" />
              <Typography variant="h6" textAlign="center">
                {o.text}
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                className="ModalDetailInfo"
              >
                <span>-</span>{' '}
                <span className="ModalTitleName">
                  {selectedOptions[o.id]?.title}
                </span>
              </Typography>
              <a className="EditButton">
                {selectedOptions[o.id]?.id ? 'CHANGE' : 'SELECT'}
              </a>
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
      {modelStylesData && (
        <Accordion
          disableGutters
          elevation={0}
          square
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary>
            <Box className="ModalHeading">
              <Image classes="" name="images/VisualizerIconSecond.png" />
              <Typography variant="h6" textAlign="center">
                MODEL
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                className="ModalDetailInfo"
              >
                <span>-</span>{' '}
                <span className="ModalTitleName">
                  {selectedOptions['style']?.title}
                </span>
              </Typography>
              <a className="EditButton">
                {selectedOptions['style']?.id ? 'CHANGE' : 'SELECT'}
              </a>
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
      )}
      {loadOptions()}
    </div>
  );
}

ApplianceOptions.propTypes = {
  modelStylesData: PropTypes.array,
  modelOptions: PropTypes.array,
  onModelSelection: PropTypes.func.isRequired,
  onOptionSelection: PropTypes.func.isRequired,
  selectedOptions: PropTypes.object.isRequired,
};
