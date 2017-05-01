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
  submit: vrtigo.submit,
  setUserId: vrtigo.setUserId,
  setAppId: vrtigo.setAppId,
};
