import vrtigo from 'vrtigo-analytics';
import { VrHeadModel } from 'react-vr';

const collectPose = () => VrHeadModel.rotationOfHeadMatrix();

vrtigo.setPoseFunction(collectPose);

export default {
  start: vrtigo.start,
  stop: vrtigo.stop,
  seekBegin: vrtigo.seekBegin,
  seekEnd: vrtigo.seekEnd,
  pause: vrtigo.pause,
  unpause: vrtigo.unpause,
  bufferBegin: vrtigo.bufferBegin,
  bufferEnd: vrtigo.bufferEnd,
  setUserId: vrtigo.setUserId,
  setAppId: vrtigo.setAppId,
  startInteractiveScene: vrtigo.startInteractiveScene,
  presentChoice: vrtigo.presentChoice,
  userChoice: vrtigo.userChoice,
  forceChoice: vrtigo.forceChoice,
  endInteractiveScene: vrtigo.endInteractiveScene,
  submit: vrtigo.submit
};
