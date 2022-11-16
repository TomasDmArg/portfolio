import { IconExternalLink } from '@tabler/icons';
import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import ContactUs from './ContactUs';
import Intro from './Intro';
import { useTheme } from '../../context';
import MyProjects from './MyProjects';
import Image from 'next/image';
import Achievements from './Achievements';
export default function Landing() {
  const [animation, setAnimation] = React.useState(0);
  const [wheelState, setWheelState] = React.useState(0);

  const { theme, toggleTheme } = useTheme();
  // Each time the wheel is scrolled, the state is updated
  const handleWheel = (e) => {
    setWheelState(e.deltaY);
  };

  // Spline objects reference
  const mac = useRef();
  const screen = useRef();
  const camera = useRef();
  const [showLoading, setShowLoading] = React.useState(true);
  const onLoad = (spline) => {
    mac.current = spline.findObjectByName("Group");
    screen.current = spline.findObjectById("95279A99-0F39-4AFF-9607-35AD9263289B");
    camera.current = spline.findObjectById("3B695796-4617-4F45-BF86-E0B33A41DF6B");
    setShowLoading(false);
  }

  // // Function where the animations are executed
  // const triggerAnimation = (index) => {
  //   switch (index) {
  //     case 0:
  //       screen.current.emitEvent('keyUp', 'screen');
  //       break;
  //     case 1:
  //       mac.current.emitEvent('keyDown', 'Group');
  //       break;
  //     case 2:
  //       camera.current.emitEvent('keyDown', 'camera');
  //       toggleTheme(!theme);
  //       break;
  //   }
  // }
  // React.useEffect(() => {
  //   if (wheelState > 0) {
  //     setAnimation(animation + 1);
  //     triggerAnimation(animation);
  //   }
  //   if (wheelState < 0) {
  //     setAnimation(animation - 1);
  //     triggerAnimation(animation);
  //   }
  // }, [wheelState]);

  return (
    <main onWheel={handleWheel}>
      <section className={`loading-wrapper ${showLoading}`}>
        <Image
          src="/logo.svg"
          alt="TMDM logo"
          className="loading-logo"
          width={240}
          height={60}
        />
      </section>
      {
        animation < 2 && (
          <Intro />
        )
      }
      {/* {
        animation == 3 && (
          <MyProjects />
        )
      }
      {
        animation > 4 && (
          <Achievements />
        )
      } */}
      <section className="animation">
        <Spline
          scene="https://prod.spline.design/t85kkg3PU-gkguwO/scene.splinecode"
          onLoad={onLoad}
        />
      </section>

      {/* <ContactUs /> */}
    </main>
  );
}