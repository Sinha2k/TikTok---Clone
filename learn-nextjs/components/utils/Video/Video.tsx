import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';

import Image from 'next/image';
import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import svgIcons from '../../../assets/svgIcons';

export interface IVideoProps {
    src: string;
    videoRef: MutableRefObject<HTMLVideoElement>;
    id: string;
}
const playBtn = faPlay as IconProp;
const pause = faPause as IconProp;

export default function Video({ src, videoRef, id }: IVideoProps) {
    const [play, setPlay] = useState(false);
    const [muted, setMuted] = useState(false);
    const [timeValue, setTimeValue] = useState(0);
    const [volumeValue, setVolumeValue] = useState(0.5);
    const secondsRef = useRef<HTMLSpanElement>(null!);

    useEffect(() => {
        if (muted) {
            setVolumeValue(0);
        } else {
            setVolumeValue(0.5);
        }
    }, [muted]);

    useEffect(() => {
        if (volumeValue === 0) {
            setMuted(true);
        } else {
            setMuted(false);
        }
    }, [volumeValue]);

    const handlerPlay = (): void => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true);
        }
    };

    const handlerMuted = (): void => {
        setMuted(!muted);
        if (muted) {
            videoRef.current.volume = 0.5;
        } else {
            videoRef.current.volume = 0;
        }
    };

    const handlerChangeVolume = (e: any): void => {
        setVolumeValue(Number(e.target.value));
        videoRef.current.volume = e.target.value;
    };

    var durationMinutes = Math.floor(videoRef.current?.duration / 60);
    var durationSeconds = Math.floor(videoRef.current?.duration - durationMinutes * 60);
    const timeUpdate = (): void => {
        var currentMinutes = Math.floor(videoRef.current?.currentTime / 60);
        var currentSeconds = Math.floor(videoRef.current?.currentTime - currentMinutes * 60);
        secondsRef.current.innerHTML = `${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:${
            currentSeconds < 10 ? '0' + currentSeconds : currentSeconds
        }/`;
        const progressValue = videoRef.current.currentTime / videoRef.current.duration;
        setTimeValue(progressValue);
    };

    const handlerChangeTime = (e: any): void => {
        setTimeValue(Number(e.target.value));
        videoRef.current.currentTime = e.target.value * videoRef.current.duration;
    };

    return (
        <div className="video_wrapper">
            <Link href={`/posts/${id}`}>
                <video onTimeUpdate={timeUpdate} autoPlay loop ref={videoRef} src={src}></video>
            </Link>
            <div className="video_controlls">
                <div onClick={handlerPlay} className="play_pause">
                    <FontAwesomeIcon color="white" width={20} height={20} icon={!play ? pause : playBtn} />
                </div>
                <Tippy
                    interactive={true}
                    placement="top-start"
                    offset={[-20, 25]}
                    render={(attrs) => (
                        <div {...attrs} tabIndex={-1} className="volume_range">
                            <input
                                onChange={handlerChangeVolume}
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volumeValue}
                            />
                            <div style={{ width: `${volumeValue * 54}px` }} className="progress_volume"></div>
                        </div>
                    )}
                >
                    <div onClick={handlerMuted} className="volume">
                        <Image alt="" src={muted ? svgIcons.muted : svgIcons.volume} />
                    </div>
                </Tippy>
            </div>
            <div className="seek_bar">
                <input onChange={handlerChangeTime} type="range" min={0} max={1} step={0.01} value={timeValue} />
                <div className="time">
                    <span ref={secondsRef} className="current">
                        00:00/
                    </span>
                    <span className="duration">
                        {durationMinutes < 10 ? '0' + durationMinutes : durationMinutes}:
                        {durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}
                    </span>
                </div>
                <div style={{ width: `${timeValue * 190}px` }} className="progress_seek_bar"></div>
            </div>
        </div>
    );
}
