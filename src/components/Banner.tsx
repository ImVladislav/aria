import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const flyZoneRef = useRef(null);
  const figureRef = useRef(null);
  const heartRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const contract = "0x123...abc"; // замініть на справжній контракт

  useEffect(() => {
    const flyZone = flyZoneRef.current;
    const figure = figureRef.current;
    const heart = heartRef.current;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const viewportHeight = window.innerHeight;

    // Set initial centering using GSAP's transform percent
    gsap.set([figure], {
      xPercent: -50,
      y: "100px",
    });

    gsap.set([heart], {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.to(figure, {
      y: viewportHeight * 2.7, // move full height down
      ease: "none",
      opacity: -1,
      scrollTrigger: {
        trigger: flyZone,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    gsap.to(heart, {
      y: viewportHeight * 1.8, // less movement
      scale: 1.8,
      ease: "none",
      scrollTrigger: {
        trigger: flyZone,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleCopy = async () => {
    console.log('CLICKED CONTRACT BLOCK');
    try {
      await navigator.clipboard.writeText(contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
      setCopied(false);
    }
  };

  return (
    <Box
      ref={flyZoneRef}
      bgcolor='black'
      minHeight='200vh'
      position='relative'
      overflow='hidden'
      width='100%'
      paddingBottom={{ xs: '80px', md: '100px' }}
    >
      <Box
        component='img'
        src='/bg.gif'
        sx={{
          position: "absolute",
          top: { xs: "18%", md: 0 },
          width: "158%",
        }}
      />
      <Box
        ref={figureRef}
        component='img'
        src='/pic_8.png'
        sx={{
          position: "absolute",
          top: "0%",
          left: "50%",
          width: { xs: "300px", md: "350px", xl: "500px" },
          zIndex: 5,
        }}
      />
      <Box
        ref={heartRef}
        component='img'
        src='/pic_9.png'
        sx={{
          position: "absolute",
          top: {
            xs: "calc(50vh)",
            md: "calc(50vh + 170px)",
            xl: "calc(50vh + 150px)",
          },
          left: "50%",
          width: { xs: "300px", md: "400px", xl: "700px" },
          zIndex: 10,
        }}
      />
      <Box
        component='img'
        src='/bg.gif'
        sx={{
          position: "absolute",
          bottom: { xs: "18%", md: 0 },
          width: "100%",
        }}
      />

      <Box
        component='img'
        src='/pic_11.png'
        sx={{
          display: 'block',
          position: 'fixed',
          top: 30,
          right: 60,
          height: 150,
        }}
      />
      
      {/* Контейнер для pic_10.png, pic_7.png і блоку з посиланнями */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 15,
          pb: { xs: 3, md: 6 },
        }}
      >
        <Box
          component='img'
          src='/pic_10.png'
          sx={{
            width: { xs: "300px", md: "450px", xl: "795px" },
            mb: 1.5,
          }}
        />
        {/* Box з /pic_7.png + логіка копіювання */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "300px", md: "450px", xl: "795px" },
            mb: 2,
            cursor: "pointer",
          }}
          onClick={handleCopy}
        >
          <Box
            component='img'
            src='/pic_7.png'
            sx={{
              width: "100%",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "auto",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: 700,
                textShadow: "2px 2px 8px #000, 0 0 10px #000",
                fontFamily: "Schoolbell, Roboto, Arial, sans-serif",
                textTransform: "uppercase",
                cursor: "pointer",
                userSelect: "all",
                width: "100%",
                transition: "transform 0.2s",
                display: "inline-block",
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.15)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {contract}
            </span>
          </Box>
        </Box>
        {/* Блок з чотирма картинками-посиланнями під двома картинками */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "5%", md: "8%", xl: "12%" },
            mt: { xs: 2, md: 4, xl: 6 },
            px: { xs: 0, md: 2, xl: 4 },
            "@media (min-width: 1636px)": {
              "& .css-krebt": {
                height: "2.95vw",
              },
              "& .css-rx5vwf": {
                height: "4.6vw",
              },
            },
          }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Box component="img" src="/pic_2.png" sx={{ height: { xs: '5.2vw', md: '3.25vw', xl: '1.95vw' }, width: 'auto', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Box component="img" src="/pic_3.png" sx={{ height: { xs: '5.2vw', md: '3.25vw', xl: '1.95vw' }, width: 'auto', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Box component="img" src="/pic_6.png" sx={{ height: { xs: '9.6vw', md: '6vw', xl: '3.6vw' }, width: 'auto', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Box component="img" src="/pic_4.png" sx={{ height: { xs: '5.2vw', md: '3.25vw', xl: '1.95vw' }, width: 'auto', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Box component="img" src="/pic_5.png" sx={{ height: { xs: '5.2vw', md: '3.25vw', xl: '1.95vw' }, width: 'auto', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.15)' } }} />
          </a>
        </Box>
      </Box>

      {/* Модалка про копіювання */}
      {copied && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fac8f2",
            color: "#000",
            borderRadius: 3,
            boxShadow: 6,
            px: 4,
            py: 2,
            fontSize: "2rem",
            fontWeight: "bold",
            zIndex: 2000,
            textAlign: "center",
            fontFamily: "Schoolbell, Roboto, Arial, sans-serif",
          }}
        >
          Contract copied!
        </Box>
      )}
    </Box>
  );
};

export default Banner;
