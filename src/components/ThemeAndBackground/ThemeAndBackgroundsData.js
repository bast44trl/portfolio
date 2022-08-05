import sunsetVideo from '../../assets/theme&backgrounds/landscape/sunsetVideo.mp4';
import forestVideo from '../../assets/theme&backgrounds/landscape/forestVideo.mp4';
import oceanVideo from '../../assets/theme&backgrounds/landscape/oceanVideo.mp4';
import skyVideo from '../../assets/theme&backgrounds/landscape/skyVideo.mp4';
import skyImg from '../../assets/theme&backgrounds/landscape/skyImg.png';
import spaceVideo from '../../assets/theme&backgrounds/landscape/spaceVideo.mp4';
import spaceImg from '../../assets/theme&backgrounds/landscape/spaceImg.png';
import forestImg from '../../assets/theme&backgrounds/landscape/forestImg.png';
import oceanImg from '../../assets/theme&backgrounds/landscape/oceanImg.png';
import sunsetImg from '../../assets/theme&backgrounds/landscape/sunsetImg.png';
import oceanVideoPortrait from '../../assets/theme&backgrounds/portrait/ocean.mp4';
import sunsetVideoPortrait from '../../assets/theme&backgrounds/portrait/sunset.mp4';
import skyVideoPortrait from '../../assets/theme&backgrounds/portrait/sky.mp4';
import forestVideoPortrait from '../../assets/theme&backgrounds/portrait/forest.mp4';
import spaceVideoPortrait from '../../assets/theme&backgrounds/portrait/space.mp4';

export const desktopBackgrounds = [
  {
    theme: 'sky',
    image: skyImg,
    video: skyVideo,
  },
  {
    theme: 'sunset',
    image: sunsetImg,
    video: sunsetVideo,
  },
  {
    theme: 'ocean',
    image: oceanImg,
    video: oceanVideo,
  },
  {
    theme: 'space',
    image: spaceImg,
    video: spaceVideo,
  },
  {
    theme: 'forest',
    image: forestImg,
    video: forestVideo,
  },
];

export const mobileBackgrounds = [
  {
    theme: 'sky',
    image: skyImg,
    video: skyVideoPortrait,
  },
  {
    theme: 'sunset',
    image: sunsetImg,
    video: sunsetVideoPortrait,
  },
  {
    theme: 'ocean',
    image: oceanImg,
    video: oceanVideoPortrait,
  },
  {
    theme: 'space',
    image: spaceImg,
    video: spaceVideoPortrait,
  },
  {
    theme: 'forest',
    image: forestImg,
    video: forestVideoPortrait,
  },
];
