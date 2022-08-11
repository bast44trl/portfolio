import sunsetVideo from '../../assets/theme&backgrounds/landscape/sunsetVideo.mp4';
import forestVideo from '../../assets/theme&backgrounds/landscape/forestVideo.mp4';
import oceanVideo from '../../assets/theme&backgrounds/landscape/oceanVideo.mp4';
import skyVideo from '../../assets/theme&backgrounds/landscape/skyVideo.mp4';
import skyImg from '../../assets/theme&backgrounds/landscape/skyImg.webp';
import spaceVideo from '../../assets/theme&backgrounds/landscape/spaceVideo.mp4';
import spaceImg from '../../assets/theme&backgrounds/landscape/spaceImg.webp';
import forestImg from '../../assets/theme&backgrounds/landscape/forestImg.webp';
import oceanImg from '../../assets/theme&backgrounds/landscape/oceanImg.webp';
import sunsetImg from '../../assets/theme&backgrounds/landscape/sunsetImg.webp';
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
    color: 'radial-gradient(#afd0ed, #fff)',
  },
  {
    theme: 'sunset',
    image: sunsetImg,
    video: sunsetVideo,
    color: 'radial-gradient(#F99C59, #4A2A29)',
  },
  {
    theme: 'ocean',
    image: oceanImg,
    video: oceanVideo,
    color: 'radial-gradient(#89A5A7, #A6B8BE)',
  },
  {
    theme: 'space',
    image: spaceImg,
    video: spaceVideo,
    color: 'radial-gradient(#293B72, #0F132A)',
  },
  {
    theme: 'forest',
    image: forestImg,
    video: forestVideo,
    color: 'radial-gradient(#536352, #384E5B)',
  },
];

export const mobileBackgrounds = [
  {
    theme: 'sky',
    image: skyImg,
    video: skyVideoPortrait,
    color: 'radial-gradient(#afd0ed, #fff)',
  },
  {
    theme: 'sunset',
    image: sunsetImg,
    video: sunsetVideoPortrait,
    color: 'radial-gradient(#F99C59, #4A2A29)',
  },
  {
    theme: 'ocean',
    image: oceanImg,
    video: oceanVideoPortrait,
    color: 'radial-gradient(#89A5A7, #A6B8BE)',
  },
  {
    theme: 'space',
    image: spaceImg,
    video: spaceVideoPortrait,
    color: 'radial-gradient(#293B72, #0F132A)',
  },
  {
    theme: 'forest',
    image: forestImg,
    video: forestVideoPortrait,
    color: 'radial-gradient(#536352, #384E5B)',
  },
];
