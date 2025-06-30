import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, Drawer, IconButton } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const flyZoneRef = useRef(null);
  const figureRef = useRef(null);
  const heartRef = useRef(null);

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
      y: isXl
        ? viewportHeight * 2.7
        : isMd
        ? viewportHeight * 2.3
        : viewportHeight * 2.3, // move full height down
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
      y: isXl
        ? viewportHeight * 1.5
        : isMd
        ? viewportHeight * 1.2
        : window.innerHeight > 670
        ? viewportHeight * 2
        : viewportHeight * 1.6, // less movement
      scale: isXl ? 1.5 : isMd ? 1.3 : 1.4,
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

  return (
    <Box
      ref={flyZoneRef}
      bgcolor='black'
      minHeight='200vh'
      position='relative'
      overflow='hidden'
      width='100%'
    >
      <Box
        component='img'
        src='/bg.gif'
        sx={{
          position: "absolute",
          top: { xs: "24%", md: 0 },
          width: "100%",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component='img'
        src='/bg2.gif'
        sx={{
          position: "absolute",
          top: { xs: "8%", md: 0 },
          width: "100%",
          display: { xs: "block", md: "none" },
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
          width: { xs: "270px", md: "350px", xl: "500px" },
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
            xs:
              window.innerHeight > 670
                ? "calc(50vh - 40px)"
                : "calc(50vh + 80px)",
            md: "calc(50vh + 170px)",
            xl: "calc(50vh + 150px)",
          },
          left: "50%",
          width: { xs: "270px", md: "400px", xl: "700px" },
          zIndex: 10,
        }}
      />
      <Box
        component='img'
        src='/bg.gif'
        sx={{
          position: "absolute",
          bottom: { xs: "22%", md: 0 },
          width: "100%",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component='img'
        src='/bg2.gif'
        sx={{
          position: "absolute",
          bottom: { xs: "18%", md: 0 },
          width: "100%",
          display: { xs: "block", md: "none" },
        }}
      />

      <Box
        component='a'
        href='https://soundcloud.com/charts/top'
        target='_blank'
        sx={{
          position: "fixed",
          top: { md: "8%" },
          right: { xs: "unset", md: 72 },
          left: { xs: 40, md: "unset" },
          bottom: {
            xs: 30,
            md: "unset",
          },
          img: { transition: "0.4s" },
          ":hover": {
            img: {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <Box
          component='img'
          src='/pic_11.png'
          sx={{
            height: {
              xs: 60,
              md: 90,
            },
          }}
        />
      </Box>

      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          display: { xs: "flex", md: "none" },
          color: "white",
        }}
      >
        <Box component='img' src='/menu.png' height={32} />
      </IconButton>

      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            bgcolor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
          }}
        >
          <Box component='img' src='/close.png' height={32} />
        </IconButton>
        <Box
          component='a'
          target='_blank'
          href='https://www.dextools.io/app/en/solana/pair-explorer/GzDbij7jzZm83Xe5xG9un9zgnLmZ2XnMxaBuQxcWNkdx?t=1751280139537'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box component='img' src='/pic_2.png' sx={{ height: 55 }} />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://dexscreener.com/solana/AS83uZJ9SoaDTZfe7Yf4XKNfXPM6mCNTnFLu7wdipump'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box component='img' src='/pic_3.png' sx={{ height: 75 }} />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://jup.ag/swap/SOL-AS83uZJ9SoaDTZfe7Yf4XKNfXPM6mCNTnFLu7wdipump'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box component='img' src='/pic_6.png' sx={{ height: 90 }} />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://x.com/TheAriaCloud'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box component='img' src='/x1.png' sx={{ height: 75 }} />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://t.me/TheAriaCloud'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box component='img' src='/pic_5.png' sx={{ height: 55 }} />
        </Box>
      </Drawer>

      <Box
        component='img'
        src='/pic_10.png'
        sx={{
          position: "absolute",
          bottom: { xs: "13%", md: "15%", xl: "13%" },
          left: "50%",
          transform: "translateX(-50%)",
          height: { xs: 30, md: 50, xl: "auto" },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "10%", xl: "8%" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 11,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component='img'
          src='/pic_7.png'
          sx={{
            width: { xs: "100%", md: "auto" },
            height: { md: 50, xl: "auto" },
          }}
        ></Box>
        <Box
          component='img'
          src='/contract.png'
          onClick={async (e) => {
            try {
              await navigator.clipboard.writeText(
                "HKccVWHaz3yd2zt8VFMc72HaTGGboxtE5W68vLVJpump"
              );

              const img = e.target as HTMLImageElement;

              setTimeout(() => {
                img.style.transform = "translate(-50%, -50%) scale(1.25)";
                img.style.transition = "transform 0.3s ease-out";

                setTimeout(() => {
                  img.style.transform = "translate(-50%, -50%) scale(1)";
                  img.style.transition = "transform 0.3s ease-out";
                }, 300);
              }, 300);
            } catch (e) {
              // fallback: do nothing
            }
          }}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            ":hover": {
              cursor: "pointer",
            },
            width: { xs: "80%", md: "auto" },
            height: { xs: "auto", md: 25, xl: 40 },
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { md: "3%", xl: "2%" },
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 5,
          zIndex: 111,
        }}
      >
        <Box
          component='a'
          target='_blank'
          href='https://www.dextools.io/app/en/solana/pair-explorer/GzDbij7jzZm83Xe5xG9un9zgnLmZ2XnMxaBuQxcWNkdx?t=1751280139537'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/pic_2.png'
            sx={{ height: { md: 40, xl: 50 } }}
          />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://dexscreener.com/solana/AS83uZJ9SoaDTZfe7Yf4XKNfXPM6mCNTnFLu7wdipump'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/pic_3.png'
            sx={{ height: { md: 55, xl: 70 } }}
          />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://jup.ag/swap/SOL-AS83uZJ9SoaDTZfe7Yf4XKNfXPM6mCNTnFLu7wdipump'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/pic_6.png'
            sx={{ height: { md: 70, xl: 90 } }}
          />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://x.com/TheAriaCloud'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/x1.png'
            sx={{ height: { md: 55, xl: 70 } }}
          />
        </Box>
        <Box
          component='a'
          target='_blank'
          href='https://t.me/TheAriaCloud'
          sx={{
            img: { transition: "0.4s" },
            ":hover": {
              img: {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <Box
            component='img'
            src='/pic_5.png'
            sx={{ height: { md: 40, xl: 50 } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
