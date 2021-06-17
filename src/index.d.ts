
import { VueConstructor } from 'vue';

export default RPMAvatar;
export const RPMAvatar: VueRPMAvatarConstructor;

export interface VueRPMMethods {
	makeAvatar: () => void;
	closeAvatar: () => void;
}

export interface VueRPMData {
	iframeCreated: boolean;
}

export interface VueRPMAvatarConstructor extends VueConstructor {
	data: () => VueRPMData;
	methods: VueRPMMethods;
}
