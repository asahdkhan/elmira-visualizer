/* eslint-disable */
import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const MainStyles = () => {
  return (
    <GlobalStyles
      styles={{
        '.Active': {
          // transform: 'scale(1.1)',
          boxShadow: '0px 0px 10px 2px rgba(194,192,194,0.7)',
          borderRadius: '100%',
        },
        '.VisualizerMainContainer': {
          maxWidth: '1024px!important',
        },
        '.textured-black': {
          width: 40,
          height: 40,
          backgroundColor: '#2B2D2D',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.black': {
          width: 40,
          height: 40,
          backgroundColor: '#2B2D2D',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.cayenne-pepper-red': {
          width: 40,
          height: 40,
          backgroundColor: '#83030D',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.liberty-blue': {
          width: 40,
          height: 40,
          backgroundColor: '#00163E',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.black-bisque': {
          width: 40,
          height: 40,
          // backgroundColor: '#00163E',
          backgroundImage: `url(
            ${require(`./assets/heritage/colour-thumb/black-bisque.jpg`)}
          )`,
          backgroundPosition: 'center',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.black-white': {
          width: 40,
          height: 40,
          // backgroundColor: '#00163E',
          backgroundImage: `url(
            ${require(`./assets/heritage/colour-thumb/black-white.jpg`)}
          )`,
          backgroundPosition: 'center',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-textured-black': {
          width: 40,
          height: 40,
          backgroundColor: '#2B2D2D',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.candy-red': {
          width: 40,
          height: 40,
          backgroundColor: '#BD3436',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-candy-red': {
          width: 40,
          height: 40,
          backgroundColor: '#BD3436',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.buttercup-yellow': {
          width: 40,
          height: 40,
          backgroundColor: '#F6EEAF',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-buttercup-yellow': {
          width: 40,
          height: 40,
          backgroundColor: '#F6EEAF',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.bisque': {
          width: 40,
          height: 40,
          backgroundColor: '#FBEACC',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-bisque': {
          width: 40,
          height: 40,
          backgroundColor: '#FBEACC',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.mint-green': {
          width: 40,
          height: 40,
          backgroundColor: '#BFE0C1',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-mint-green': {
          width: 40,
          height: 40,
          backgroundColor: '#BFE0C1',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.robins-egg-blue': {
          width: 40,
          height: 40,
          backgroundColor: '#85D1D1',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-robins-egg-blue': {
          width: 40,
          height: 40,
          backgroundColor: '#85D1D1',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.tropical-blue': {
          width: 40,
          height: 40,
          backgroundColor: '#88D5EE',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-tropical-blue': {
          width: 40,
          height: 40,
          backgroundColor: '#88D5EE',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.white': {
          width: 40,
          height: 40,
          backgroundColor: '#F1F2F2',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-white': {
          width: 40,
          height: 40,
          backgroundColor: '#F1F2F2',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.splashback-colors-quick-silver': {
          width: 40,
          height: 40,
          backgroundColor: '#b3b2b1',
          borderRadius: '100%',
          cursor: 'pointer',
        },
        '.prong-4:before': {
          content: '"4 Prong"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        },
        '.prong-3:before': {
          content: '"3 Prong"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        },

        '.in-line:before': {
          content: '"In Line"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        },
        '.standard:before': {
          content: '"Standard"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        },
        '.wall-mounted:before': {
          content: '"Wall Mounted"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          // whiteSpace: 'nowrap',
        },
        '.yes:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.yes-splashback:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.no:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },

        '.no-splashback:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.no-frames:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.no-trim:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.no-skirt:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },
        '.no-trivet:before': {
          content: '"???"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '30px',
        },

        '.SavePdfBtn': {
          backgroundColor: 'transparent!important',
          padding: '0!important',
          color: '#00a8ff!important',
          marginRight: '15px!important',
        },
        '.SavePdfBtn:hover': {
          backgroundColor: 'transparent',
        },
        '.ResetBtn': {
          backgroundColor: 'transparent!important',
          padding: '0!important',
          color: '#802f2d!important',
          minWidth: 'auto',
        },
        '.ResetBtn:hover': {
          backgroundColor: 'transparent',
        },
        '.natural-gas:before': {
          content: '"Natural Gas"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
        },
        '.liquid-propane:before': {
          content: '"Liquid Propane"',
          display: 'flex',
          background: '#dad6d5',
          padding: '10px 10px',
          width: '50px',
          height: '50px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
        },
        '.chrome:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/range/chrome/chrome.jpg`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.painted:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/range/chrome/painted.jpg`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.left:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/fridge/hinge/thumbs/hing-left.jpg`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.rightheritage:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/refrigerator/hinge/thumbs/left.png`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          backgroundPosition: 'right center',
        },
        '.leftheritage:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/refrigerator/hinge/thumbs/right.png`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          backgroundPosition: 'left center',
        },
        '.right:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/fridge/hinge/thumbs/hing-right.jpg`)}
          )`,
          backgroundColor: '#dad6d5',
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.electric-self-convection:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/range/oven/thumbs/oven.png`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.gas-self:before': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/northstar/range/oven/thumbs/oven.png`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.metal-trim-nickel ': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/range/metal-trim/thumbs/1.jpg`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.nickel': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/range/door-frames/thumbs/1.jpg`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.copper': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/range/door-frames/thumbs/2.jpg`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.metal-trim-copper': {
          content: '""',
          display: 'flex',
          backgroundImage: `url(
            ${require(`./assets/heritage/wallOven/metal-trim/thumbs/2.jpg`)}
          )`,
          // padding: '10px 10px',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        },
        '.createKitchenSection': {
          border: '2px solid #dad6d5',
          borderRadius: '6px',
        },
        '.CommonButton.SaveBtn': {
          minWidth: '260px',
        },
        '.width100': {
          width: '100%',
        },
        '.parentKitchenImageBox': {
          position: 'relative',
          top: '0',
          left: '0',
          display: 'flex',
        },
        '.parentApplianceImageBox': {
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundRepeat: 'no-repeat',
        },
        '.parentApplianceImageBox-apply': {
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundRepeat: 'no-repeat',
        },
        '.firstChildImageBox': {
          position: 'relative',
          top: '0',
          left: '0',
        },
        '.childImageBox': {
          position: 'absolute',
          top: '0',
          left: '0',
        },
        '.VisualizerHeading': {
          marginTop: '50px',
          marginBottom: '40px',
        },
        '.VisualizerHeading h6': {
          marginTop: '10px',
          fontWeight: '800',
          letterSpacing: '1.5px',
        },
        'ul li': {
          listStyle: 'none',
        },
        ul: {
          padding: '0 0 0 0',
          margin: '0 0 0 0',
        },
        '.CreateKitchenSection': {
          border: '2px solid #dad6d5',
          borderRadius: '6px',
        },
        '.HeaderSection': {
          borderBottom: '2px solid #dad6d5',
          minHeight: '75px',
          padding: '10px 25px 20px 25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.HeaderSectionThird': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '2px solid #dad6d5',
          minHeight: '65px',
          padding: '0 25px',
          backgroundColor: '#dad6d5',
          position: 'relative',
        },
        '.EditButton.RedLink': {
          color: '#802f2d',
          fontWeight: '700',
          marginLeft: '30px',
        },
        '.HeaderLeftSide .EditButton': {
          fontWeight: '700',
          cursor: 'pointer',
        },
        '.MuiTooltip-popper .MuiTooltip-tooltip': {
          color: '#54595f',
          padding: '10px 10px',
          fontSize: '12px',
          maxWidth: '250px',
          lineHeight: '16px',
          borderRadius: '4px',
          backgroundColor: 'rgba(241, 242, 242, 0.9)',
          fontFamily: "Poppins', 'sans-serif",
          fontWeight: '700',
          textTransform: 'uppercase',
          marginBottom: '10px',
        },
        '.MuiTooltip-popper .MuiTooltip-arrow': {
          Color: 'rgba(241, 242, 242, 0.9)!important',
        },
        '.MuiTooltip-popper .MuiTooltip-arrow::before': {
          backgroundColor: 'rgba(241, 242, 242, 0.9)!important',
        },
        '.HeaderRightSide': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
        '.HeaderLeftSide': {
          // margin: '20px auto 20px',
          margin: '20px 0 20px 0',
        },
        '.FlooringStyleSection': {
          display: 'flex',
          alignItems: 'center',
        },
        '.CommonCircle ul li': {
          marginLeft: '8px',
        },
        '.CommonCircle ul': {
          display: 'flex',
          marginLeft: '20px',
        },
        '.CommonCircle ul li a': {
          width: '30px',
          height: '30px',
          display: 'block',
          borderRadius: '100%',
          transition: 'all 0.5s ease-in-out',
          transform: 'scale(1)',
          cursor: 'pointer',
          position: 'relative',
        },
        '.CommonCircle ul li a:hover': {
          transition: 'all 0.5s ease-in-out',
          transform: 'scale(1.1)',
        },
        '.CommonCircle ul li a.Active': {
          transition: 'all 0.5s ease-in-out',
          transform: 'scale(1.2)',
          boxShadow: 'none',
          borderRadius: '100%',
        },
        '.CommonCircle ul li a.Active span': {
          opacity: '1',
          transition: 'all 0.5s ease-in-out',
        },
        '.CommonCircle ul li a span': {
          position: 'absolute',
          bottom: '0',
          left: '50%',
          opacity: '0',
          fontSize: '10px',
          transform: 'translate(-50%, 20px)',
          whiteSpace: 'nowrap',
        },
        '.CabinetColorSection h6': {
          fontWeight: '600',
          textTransform: 'uppercase',
        },
        '.FlooringStyleSection h6': {
          fontWeight: '600',
          textTransform: 'uppercase',
        },
        '.MainKitchenSection .parentKitchenImageBox img': {
          width: 'auto',
        },
        '.MainKitchenSection': {
          display: 'flex',
          position: 'relative',
          minHeight: '540px',
        },
        '.CommonIconBox': {
          position: 'absolute',
          cursor: 'pointer',
          zIndex: '888',
          // backgroundImage: `url(
          //   ${require(`./assets/images/VisualizerIcon.png`)}
          // )`,
          backgroundColor: '#6ec8d7',
          borderRadius: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '30px',
          height: '30px',
        },
        '.CommonIconBox:before': {
          display: 'block',
          content: '"+"',
          fontSize: '30px',
          color: '#fff',
          fontWeight: '700',
          textAlign: 'center',
          position: 'absolute',
          top: '11px',
          left: '50%',
          width: '100%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-9',
        },
        '.CommonIconBoxLast:before': {
          display: 'block',
          content: '"+"',
          fontSize: '30px',
          color: '#fff',
          fontWeight: '700',
          textAlign: 'center',
          position: 'absolute',
          top: '0px',
          right: '0px',
          width: '30px',
          height: '30px',
          zIndex: '-9',
          backgroundColor: '#6ec8d7',
          lineHeight: '25px',
          borderRadius: '100%',
        },

        '.CommonIconBoxLast': {
          position: 'absolute',
          cursor: 'pointer',
          zIndex: '888',
        },
        '.Icon': {
          display: 'block',
          width: '30px',
          height: '30px',
        },
        '.CommonIconBox.NorthstarIconFirst': {
          top: '40%',
          left: '28%',
        },
        '.CommonIconBox.NorthstarIconSecond': {
          top: '70%',
          left: '28%',
        },
        '.CommonIconBox.NorthstarIconThird': {
          top: '24%',
          left: '49%',
        },
        '.CommonIconBox.NorthstarIconFourth': {
          top: '56%',
          left: '62%',
        },
        '.CommonIconBox.NorthstarIconFifth': {
          top: '30%',
          right: '17%',
        },
        '.CommonIconBox.HeritageIconFirst': {
          top: '25%',
          left: '26%',
        },
        '.CommonIconBox.HeritageIconSecond': {
          top: '26%',
          left: '53%',
        },
        '.CommonIconBox.HeritageIconThird': {
          top: '27%',
          right: '15%',
        },
        '.CommonIconBox.HeritageIconFourth': {
          top: '43%',
          right: '14%',
        },
        '.CommonIconBox.HeritageIconFifth': {
          bottom: '28%',
          right: '15%',
        },
        '.CommonIconBoxLast.IconLast': {
          bottom: '13%',
          right: '8%',
        },
        '.CustomizeBox': {
          position: 'absolute',
          width: '410px',
          color: '#54595f',
          padding: '10px 10px',
          fontSize: '12px',
          maxWidth: '250px',
          lineHeight: '16px',
          borderRadius: '4px',
          backgroundColor: 'rgba(241, 242, 242, 0.7)',
          fontWeight: '700',
          textTransform: 'uppercase',
          right: '22px',
          top: '15px',
          zIndex: '-88',
          textAlign: 'center',
        },
        '.CabinetColorSection': {
          marginRight: '30px',
          display: 'flex',
          alignItems: 'center',
        },
        '.FooterSection': {
          borderTop: '2px solid #dad6d5',
          minHeight: '65px',
          padding: '12px 25px',
          display: 'grid',
          height: '100%',
          alignItems: 'center',
        },
        '.FooterSection .MuiTypography-body1 b': {
          color: '#802f2d',
        },
        '.ModalTitleName': {
          // whiteSpace: 'nowrap',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          display: 'inline-block',
          paddingLeft: '5px',
          // paddingTop: '8px',
          // width: '90%',
          textAlign: 'left',
          lineHeight: '20px',
        },
        '.ModalHeading': {
          display: 'flex',
          // alignItems: 'center',
          // marginBottom: '25px',
          width: '100%',
          paddingBottom: '10px',
        },
        '.ModalHeading img': {
          marginRight: '12px',
          width: '36px',
          height: '36px',
        },
        'ModalHeading .MuiTypography-body2': {
          color: '#00a8ff',
          marginLeft: '8px',
        },
        '.ApplianceBoxLeft': {
          width: '40%',
          overflow: 'hidden',
          minWidth: '392px',
        },
        '.ApplianceBoxRight': {
          padding: '40px 20px',
          width: '60%',
        },
        '.ModalInfo': {
          textAlign: 'center',
          padding: '10px 10px',
          // width: 'calc( 50% - 30px)',
          maxWidth: 'calc( 29% - 20px)',
          // minWidth: 'calc( 29% - 30px)',
        },
        '.ModalBox': {
          paddingLeft: '50px',
        },
        '.ModalInfo img': {
          cursor: 'pointer',
          borderRadius: '6px',
          padding: '5px',
        },
        '.ModalInfo .MuiTypography-body2': {
          maxWidth: '180px',
          cursor: 'pointer',
        },
        '.ModalContentBox': {
          display: 'flex',
          flexWrap: 'wrap',
          // height: '450px',
          // minHeight: '260px',
          // maxHeight: '270px',
          overflowX: 'auto',
          alignItems: 'flex-start',
        },
        '.ModalContentBoxThird': {
          height: '450px',
          overflowX: 'auto',
        },
        '.ModalContentBoxThird .ModalHeading': {
          marginBottom: '10px',
        },
        '.ModalHeading h6': {
          textTransform: 'uppercase',
          marginRight: '5px',
          paddingTop: '7px',
        },
        '.ModalContentBoxThird::-webkit-scrollbar': {
          width: '12px',
        },
        '.ModalHeading .EditButton': {
          paddingTop: '9px',
        },
        '.ModalContentBox::-webkit-scrollbar': {
          width: '12px',
        },
        '.ModalContentBox::-webkit-scrollbar-track': {
          background: '#f0f0f0',
        },
        '.ModalContentBoxThird::-webkit-scrollbar-track': {
          background: '#f0f0f0',
        },
        '.ModalContentBox::-webkit-scrollbar-thumb': {
          backgroundColor: '#595959',
          borderRadius: '0px',
          border: '3px solid #f0f0f0',
        },
        '.ModalContentBoxThird::-webkit-scrollbar-thumb': {
          backgroundColor: '#595959',
          borderRadius: '0px',
          border: '3px solid #f0f0f0',
        },
        '.ApplianceName': {
          maxWidth: '450px',
          marginTop: '25px',
        },
        '.ApplianceName h4': {
          fontWeight: '600',
          textTransform: 'uppercase',
        },
        '.ApplianceName .MuiTypography-body2': {
          fontSize: '10px',
          fontWeight: '900',
          color: '#00a8ff',
        },
        '.ApplianceName .MuiTypography-body1': {
          fontWeight: '600',
        },
        '.ModalPricing': {
          marginBottom: '20px',
          paddingLeft: '48px',
        },
        '.ModalPricing h3': {
          fontWeight: '600',
          color: '#00a8ff',
        },
        '.ModalPricing .MuiTypography-body1': {
          fontWeight: '600',
        },
        '.EditButton': {
          color: '#00a8ff',
          fontWeight: '600',
          fontSize: '14px',
          marginLeft: '5px',
        },
        '.ModalContentBoxSecond .CabinetColors': {
          marginLeft: '18px',
        },
        '.ModalContentBoxSecond .CommonCircle ul li': {
          marginLeft: '12px',
        },
        '.BackButton': {
          position: 'absolute',
          left: '50px',
          fontSize: '20px',
          cursor: 'pointer',
        },
        '.ModalDetailInfo': {
          marginLeft: '5px',
          display: 'flex',
          alignItems: 'flex-start',
          paddingTop: '8px',
        },
        '.DashBox': {
          lineHeight: '20px',
        },
        'body .MuiButtonBase-root': {
          backgroundColor: '#802f2d',
          fontWeight: '600',
          paddingLeft: '30px',
          paddingRight: '30px',
        },
        'body .MuiButtonBase-root:hover': {
          backgroundColor: '#00a8ff',
        },
        '.ViewButton': {
          minHeight: '60px',
          maxWidth: '220px',
          paddingLeft: '50px',
          paddingRight: '50px',
          marginRight: '40px',
        },
        '.FooterLeftSide': {
          marginRight: '40px',
        },
        '.FooterSectionSecond': {
          display: 'grid',
          justifyContent: 'center',
        },
        '.FooterSection.FooterSectionSecond .FooterLeftSide': {
          marginRight: '0',
          marginBottom: '20px',
          marginTop: '10px',
        },
        '.ProductApplianceBox ul': {
          padding: '0px',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '40px',
          marginBottom: '40px',
        },
        '.ProductApplianceBox ul li:first-of-type': {
          borderLeft: 'none',
        },
        '.ProductApplianceBox ul li': {
          listStyle: 'none',
          borderLeft: '1px solid #dad6d5',
          padding: '5px 20px',
          width: 'calc(20% - 41px)',
          textAlign: 'center',
          cursor: 'pointer',
        },
        '.ProductApplianceBox ul li:hover p': {
          color: '#802f2d',
        },
        '.RedColor': {
          color: '#802f2d',
        },
        '.PricingBox': {
          background: '#fbf9f9',
          // borderRadius: '6px',
          margin: '15px 10px',
        },

        '.PricingBoxCol': {
          backgroundColor: '#fbf9f9',
          borderRadius: '6px',
          border: '10px solid #fff',
        },
        '.SkyBlueBg': {
          backgroundColor: '#74d2e7',
          '-webkit-print-color-adjust': 'exact',
        },
        '.PricingHeaderBox': {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 15px',
          alignItems: 'center',
          borderRadius: '6px 6px 0px 0px',
        },
        '.PricingHeaderBox p': {
          color: '#fff',
          textTransform: 'uppercase',
        },
        '.PricingContentBox ul li': {
          listStyle: 'none',
        },
        '.PricingContentBox ul': {
          padding: '0',
          margin: '0',
        },
        '.PricingContentBox ul li': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '15px 0px 15px 0px',
        },
        '.PricingContentBox': {
          padding: '15px 15px',
          // border: '1px solid #dad6d5',
        },
        '.ProductInfo': {
          width: 'calc( 100% - 100px)',
        },
        '.ProductInfo .EditButton': {
          marginLeft: '0px',
        },
        '.ProductInfo .MuiTypography-body2': {
          fontWeight: '500',
        },
        '.ProductInfo a': {
          fontWeight: '500',
        },
        '.PricingFooterBox': {
          padding: '5px 0px 15px 15px',
        },
        '.PricingFooterBox.SkyBlueColor .MuiTypography-root': {
          fontWeight: '600',
        },
        '.PricingFooterBox.RedColor .MuiTypography-root': {
          fontWeight: '600',
        },
        '.PricingFooterBox.SkyBlueColor  .MuiTypography-root': {
          color: '#74d2e7',
          '-webkit-print-color-adjust': 'exact',
        },
        '.PricingFooterBox.RedColor  .MuiTypography-root': {
          color: '#802f2d',
        },
        '.PricingFooterBox span': {
          marginRight: '15px',
        },
        '.CommonButton.EditBtn': {
          height: '30px',
          backgroundColor: '#00a8ff',
        },
        '.CommonButton.EditBtn:hover': {
          backgroundColor: '#802f2d',
        },
        '.CommonButton.AddBtn': {
          height: '30px',
          backgroundColor: '#c92129',
        },
        '.CommonButton.AddBtn:hover': {
          backgroundColor: '#00a8ff',
        },
        '.WaterBlueBg': {
          backgroundColor: '#00a8ff',
          '-webkit-print-color-adjust': 'exact',
        },
        '.PricingContainerBox': {
          marginTop: '0px!important',
          marginBottom: '20px',
          maxWidth: '1024px!important',
        },
        // '.PricingBox': {
        //   margin: '0 15px 20px 15px',
        // },
        // '.PricingContainerBox .MuiGrid-root:nth-child(1) .PricingBox': {
        //   marginLeft: '0px',
        // },
        // '.PricingContainerBox .MuiGrid-root:nth-child(3) .PricingBox': {
        //   marginRight: '0px',
        // },
        // '.PricingContainerBox .MuiGrid-root:nth-child(4) .PricingBox': {
        //   marginLeft: '0px',
        // },
        // '.PricingContainerBox .MuiGrid-root:nth-child(6) .PricingBox': {
        //   marginRight: '0px',
        // },
        '.PricingTotalBox': {
          maxWidth: '1024px',
        },
        '.RedBg': {
          backgroundColor: '#802f2d',
          '-webkit-print-color-adjust': 'exact',
        },
        '.PricingTotalInfo .MuiTypography-root': {
          color: '#fff',
        },
        '.PricingTotalInfo': {
          padding: '15px 20px',
          borderRadius: '4px',
          margin: '0 15px 10px 15px',
        },
        '.PricingTotalInfo h3': {
          fontWeight: '600',
        },

        '.parentApplianceContainer': {
          position: 'relative',
          maxWidth: '450px',
          margin: '20px 0px',
          display: 'flex',
          width: '100%',
          height: '100%',
        },
        '.parentApplianceContainer .parentApplianceImageBox': {
          left: '50%',
          transform: 'translate(-50%, 0px)',
        },
        '.parentApplianceContainer .parentApplianceImageBox-apply': {
          left: '50%',
          transform: 'translate(-50%, 0px)',
        },
        '.parentApplianceImageBox-apply img:nth-of-type(2)': {
          zIndex: '99',
        },
        '.ApplianceBoxRight .MuiButtonBase-root.MuiAccordionSummary-root': {
          backgroundColor: 'transparent',
          fontWeight: '600',
          margin: '0px 0px',
        },
        '.ApplianceBoxRight .MuiAccordion-root::before': {
          display: 'none',
        },
        '.ApplianceBoxRight .MuiAccordionSummary-content': {
          margin: '0px 0px',
        },
        '.ApplianceBoxRight .MuiAccordionDetails-root': {
          padding: '0px',
        },
        '.ModalInfo img[aria-label="Textured Black"]': {
          backgroundColor: '#2B2D2D',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Bisque"]': {
          backgroundColor: '#FBEACC',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Candy Red"]': {
          backgroundColor: '#BD3436',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Tropical Blue"]': {
          backgroundColor: '#88D5EE',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="White"]': {
          backgroundColor: '#F1F2F2',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Buttercup Yellow"]': {
          backgroundColor: '#F6EEAF',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Robins Egg Blue"]': {
          backgroundColor: '#85D1D1',
          borderRadius: '100%',
        },
        '.ModalInfo img[aria-label="Mint Green"]': {
          backgroundColor: '#BFE0C1',
          borderRadius: '100%',
        },
        '.CustomizeBoxMobile': {
          display: 'none',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1019px)':
          {
            '.CommonButton.SaveBtn': {
              minWidth: '150px',
            },
            '.ApplianceBoxLeft': {
              minWidth: '340px',
            },
          },
        '@media screen and (min-device-width: 320px) and (max-device-width: 1019px)':
          {
            '.CabinetColorSection h6': {
              fontSize: '14px',
            },
            '.FlooringStyleSection h6': {
              fontSize: '14px',
            },
            '.ApplianceName h4': {
              fontSize: '14px',
            },
            '.MainKitchenSection': {
              overflow: 'scroll',
            },
            '.MainKitchenInnerWrapper': {
              width: '1024px',
              position: 'relative',
              display: 'table',
            },
            '.CommonIconBoxLast.IconLast': {
              bottom: 'unset',
              right: 'unset',
              left: '330px',
              top: '40px',
            },
            '.CustomizeBoxMobile': {
              display: 'block',
              marginTop: '10px',
            },
            '.ModalInfo': {
              maxWidth: 'calc( 50% - 20px)',
            },

            '.BackButton': {
              position: 'relative',
              fontSize: '16px',
              cursor: 'pointer',
              left: 'unset',
              marginRight: '20px',
              fontWeight: '700',
            },
            '.PricingTotalInfo': {
              minHeight: '90px',
            },
          },
        '@media screen and (min-device-width: 320px) and (max-device-width: 600px)':
          {
            '.CommonButton.SaveBtn': {
              display: 'table',
              margin: '0 auto 12px',
            },
            '.ModalBox': {
              // paddingLeft: '0px',
            },
            '.ApplianceBoxLeft': {
              // minHeight: '420px',
              maxWidth: '100%',
              width: '100%',
              minWidth: '100%',
            },
            '.ModalTitleName': {
              fontSize: '14px',
            },
            '.ModalHeading h6': {
              fontSize: '14px',
            },
            '.ModalInfo .MuiTypography-body2': {
              fontSize: '12px',
              padding: '5px 8px',
            },
            '.ApplianceBoxRight': {
              width: '100%',
              paddingLeft: '0px',
            },
            '.ApplianceName': {
              maxWidth: '100%',
            },
            '.parentApplianceContainer': {
              maxWidth: '100%',
            },
            '.HeaderSectionThird .CabinetColorSection': {
              marginBottom: '20px',
              marginTop: '20px',
            },
            '.HeaderSectionThird .BackButton': {
              marginBottom: '15px',
            },
            '.HeaderRightSide': {
              display: 'grid',
            },
            '.CabinetColorSection': {
              marginRight: '0',
              marginBottom: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              display: 'grid',
              textAlign: 'center',
            },
            '.FlooringStyleSection': {
              marginRight: '0',
              marginBottom: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              display: 'grid',
              textAlign: 'center',
            },
            '.HeaderSection': {
              display: 'table',
              margin: '0 auto',
            },
            '.HeaderLeftSide': {
              textAlign: 'center',
            },
            '.CabinetColors': {
              marginTop: '15px',
            },
            '.MainKitchenSection': {
              display: 'grid',
            },
          },
      }}
    />
  );
};

export default MainStyles;
