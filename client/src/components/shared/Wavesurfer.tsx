import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface AudioWaveformProps {
	audioFile: string;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({ audioFile }) => {
	const waveformRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!waveformRef.current) return;

		const wavesurfer = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: 'violet',
			progressColor: 'purple',
		});

		wavesurfer.load(audioFile);

		return () => wavesurfer.destroy();
	}, [audioFile]);

	return <div ref={waveformRef}></div>;
};

export default AudioWaveform;
