/* eslint-disable */
import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const MainStyles = () => {
  return (
    <GlobalStyles
      styles={{
        '.createKitchenSection': {
          border: '2px solid #dad6d5',
          borderRadius: '6px',
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
          margin: '20px auto 20px',
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
          transform: 'scale(1.2)',
        },
        '.CommonCircle ul li a.Active': {
          transition: 'all 0.5s ease-in-out',
          transform: 'scale(1.2)',
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
          width: '100%',
        },
        '.MainKitchenSection': {
          display: 'flex',
          position: 'relative',
          minHeight: '590px',
        },
        '.CommonIconBox': {
          position: 'absolute',
          cursor: 'pointer',
          zIndex: '888',
          backgroundImage: `url(
            ${require(`./assets/images/VisualizerIcon.png`)}
          )`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '36px',
          height: '36px',
        },
        '.CommonIconBoxLast': {
          position: 'absolute',
          cursor: 'pointer',
          zIndex: '888',
        },
        '.Icon': {
          display: 'block',
          width: '36px',
          height: '36px',
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
        '.ModalHeading': {
          display: 'flex',
          alignItems: 'center',
          // marginBottom: '25px',
          width: '100%',
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
        },
        '.ApplianceBoxRight': {
          padding: '40px 20px',
          width: '60%',
        },
        '.ModalInfo': {
          textAlign: 'center',
          padding: '15px 15px',
          // width: 'calc( 50% - 30px)',
          maxWidth: 'calc( 29% - 30px)',
          // minWidth: 'calc( 29% - 30px)',
        },
        '.ModalInfo img.Active': {
          transform: 'scale(1.1)',
        },
        '.ModalBox': {
          paddingLeft: '50px',
        },
        '.ModalInfo img': {
          cursor: 'pointer',
          borderRadius: '6px',
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
          maxHeight: '270px',
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
        },
        '.ModalContentBoxThird::-webkit-scrollbar': {
          width: '12px',
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
        },
        '.ModalDetailInfo': {
          marginLeft: '5px',
        },
        '.MuiButtonBase-root': {
          backgroundColor: '#802f2d',
          fontWeight: '600',
        },
        '.MuiButtonBase-root:hover': {
          backgroundColor: '#00a8ff',
        },
        '.ViewButton': {
          minHeight: '60px',
          maxWidth: '220px',
          paddingLeft: '50px',
          paddingRight: '50px',
          marginRight: '40px',
        },
        '.FooterSectionSecond': {
          display: 'flex',
          justifyContent: 'center',
        },
        '.ProductApplianceBox ul': {
          padding: '0px',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '40px',
          marginBottom: '40px',
        },
        '.ProductApplianceBox ul li:first-child': {
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
          borderRadius: '6px',
        },
        '.SkyBlueBg': {
          backgroundColor: '#74d2e7',
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
          padding: '5px 15px 15px 15px',
        },
        '.PricingFooterBox.SkyBlueColor .MuiTypography-root': {
          fontWeight: '600',
        },
        '.PricingFooterBox.RedColor .MuiTypography-root': {
          fontWeight: '600',
        },
        '.PricingFooterBox.SkyBlueColor  .MuiTypography-root': {
          color: '#74d2e7',
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
        },
        '.PricingContainerBox': {
          marginTop: '20px',
          marginBottom: '60px',
        },
        '.RedBg': {
          backgroundColor: '#802f2d',
        },
        '.PricingTotalInfo .MuiTypography-root': {
          color: '#fff',
        },
        '.PricingTotalInfo': {
          padding: '15px 20px',
          borderRadius: '4px',
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
        '.parentApplianceImageBox-apply img:nth-child(2)': {
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
      }}
    />
  );
};

export default MainStyles;
