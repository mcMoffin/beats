class Drumkit {
    constructor() {
        this.tracks = document.querySelector(".track-group");
        this.audios = document.querySelector(".grouped-audio");

        this.trackSelector = document.querySelector(".track-selector");
        this.creatorBtn = document.querySelector(".new-track-btn");
        this.playBtn = document.querySelector(".play");
        this.playBtnIcon = document.querySelector(".play i");
        this.tempoSlider = document.querySelector(".tempo-slider");
        this.tempoDisplay = document.querySelector('.tempo-nr');
        this.volumeSlider = document.querySelector(".volume-slider");
        this.volumeDsiplay = document.querySelector('.volumeDisp');

        // Audio selectors (only for the cool beat loops now)
        this.masterVolume;

        this.clapAudio;
        this.cowbellAudiond;
        this.crashAudio;
        this.hihatAudio;
        this.kickAudio;
        this.openhatAudiond;
        this.percAudio;
        this.rideAudio;
        this.shakerAudiod;
        this.snareAudio;
        this.tomAudio;

        this.beatIndex = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.volumeLvl = 100;
        this.trackAmount = 0;
    }
    fileRetreave(createOptions) {
        let creatorSelection = this.trackSelector.value;

        if (creatorSelection === "clap") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-analog.wav">Analog ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-crushed.wav">Crushed ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-fat.wav">Fat ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-slapper.wav">Slapper ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tape.wav">Tape ${creatorSelection}</option>`;
        }
        if (creatorSelection === "cowbell") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option>`;
        }
        if (creatorSelection === "crash") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-noise.wav">Noise ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tape.wav">Tape ${creatorSelection}</option>`;
        }
        if (creatorSelection === "hihat") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-acoustic02.wav">Acoustic ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-analog.wav">Analog ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-digital.wav">Digital ${creatorSelection} </option> <option value="./sounds/${creatorSelection}-dist01.wav">Dist ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-dist02.wav">Dist ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-electro.wav">Electro ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-plain.wav">Plain ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-reso.wav">Reso ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-ring.wav">Ring ${creatorSelection}</option>`;
        }
        if (creatorSelection === "kick") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-acoustic02.wav">Acoustic ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-big.wav">Big ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-classic.wav">Classic ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-cultivator.wav">Cultivator ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-deep.wav">Deep ${creatorSelection} </option> <option value="./sounds/${creatorSelection}-dry.wav">Dry ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-electro01.wav">Electro ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-electro02.wav">Electro ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-floppy.wav">Floppy ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-gritty.wav">Gritty ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-heavy.wav">Heavy ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-newwave.wav">New wave ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-oldschool.wav">Oldschool ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-plain.wav">Plain ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-slapback.wav">Slap back ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-softy.wav">Softy ${creatorSelection}</option>  <option value="./sounds/${creatorSelection}-stomp.wav">Stomp ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tape.wav">Tape ${creatorSelection}</option>  <option value="./sounds/${creatorSelection}-thump.wav">Thump ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tight.wav">Tight ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tron.wav">Tron ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-vinyl01.wav">Vinyl ${creatorSelection} 1</option><option value="./sounds/${creatorSelection}-vinyl02.wav">vinyl ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-zapper.wav">Zapper ${creatorSelection}</option>`;
        }
        if (creatorSelection === "openhat") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-analog.wav">Analog ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-slick.wav">Slick ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tight.wav">Tight ${creatorSelection}</option>`;
        }
        if (creatorSelection === "perc") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-chirpy.wav">Chirpy ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-hollow.wav">Hollow ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-laser.wav">Laser ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-metal.wav">Metal ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-nasty.wav">Nasty ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-short.wav">Short ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tambo.wav">Tambo ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tribal.wav">Tribal ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-weirdo.wav">Weirdo ${creatorSelection}</option>`;
        }
        if (creatorSelection === "ride") {
            createOptions = `<option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-acoustic02.wav">Acoustic ${creatorSelection} 2</option>`;
        }
        if (creatorSelection === "shaker") {
            createOptions = `<option value="./sounds/${creatorSelection}-analog.wav">Analog ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-shuffle.wav">Shuffle ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-suckup.wav">Suckup ${creatorSelection}</option>`;
        }
        if (creatorSelection === "snare") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-acoustic02.wav">Acoustic ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-big.wav">Big ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-block.wav">Block ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-brute.wav">Brute ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-dist01.wav">Dist ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-dist02.wav">Dist ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-dist03.wav">Dist ${creatorSelection} 3</option> <option value="./sounds/${creatorSelection}-electro.wav">Electro ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-lofi01.wav">lofi ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-lofi02.wav">lofi ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-modular.wav">Modular ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-noise.wav">Noise ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-pinch.wav">Pinch ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-punch.wav">Punch ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-smasher.wav">Smasher ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-sumo.wav">Sumo ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-tape.wav">Tape ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-vinyl01.wav">Vinyl ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-vinyl02.wav">Vinyl ${creatorSelection} 2</option>`;
        }
        if (creatorSelection === "tom") {
            createOptions = `<option value="./sounds/${creatorSelection}-808.wav">808 ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-acoustic01.wav">Acoustic ${creatorSelection} 1</option> <option value="./sounds/${creatorSelection}-acoustic02.wav">Acoustic ${creatorSelection} 2</option> <option value="./sounds/${creatorSelection}-analog.wav">Analog ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-chiptune.wav">Chiptune ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-fm.wav">FM ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-lofi.wav">Lofi ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-rototom.wav">Rotation ${creatorSelection}</option> <option value="./sounds/${creatorSelection}-short.wav">Short ${creatorSelection}</option>`;
        }

        this.createTrack(createOptions);
    }
    createTrack(createOptions) {
        /*REMEBER:  
            1)  Selector gets all sounds that have name from variable "creatorSelection".
         */

        let creatorSelection = this.trackSelector.value;
        this.trackAmount = document.querySelectorAll(`.${creatorSelection}-track`).length;

        //track DIV
        const newTrack = document.createElement("div");
        newTrack.setAttribute("id", `${creatorSelection}${this.trackAmount}`);
        newTrack.classList.add(`${creatorSelection}-track`);
        newTrack.classList.add("track");

        //create controll div
        const newTrackControlls = document.createElement("div");
        newTrackControlls.classList.add("controls");
        newTrack.appendChild(newTrackControlls);

        //creates h1
        const newTrackH1 = document.createElement("h1");
        newTrackH1.innerText = creatorSelection.charAt(0).toUpperCase() + creatorSelection.slice(1);
        newTrackControlls.appendChild(newTrackH1);

        //creates mute btn
        const newTrackMute = document.createElement("button");
        newTrackMute.setAttribute("data-track", `${creatorSelection}-${this.trackAmount}`);
        newTrackMute.classList.add(`mute`);
        newTrackMute.innerHTML = "<i class='fas fa-volume-mute'></i>";
        newTrackControlls.appendChild(newTrackMute);

        //creates selector
        const newTrackSelector = document.createElement("select");
        newTrackSelector.setAttribute("data-track", `${creatorSelection}-${this.trackAmount}`);
        newTrackSelector.innerHTML = createOptions;
        newTrackControlls.appendChild(newTrackSelector);

        //creates delete btn
        const newTrackDelete = document.createElement("button");
        newTrackDelete.setAttribute("data-track", `${creatorSelection}-${this.trackAmount}`);
        newTrackDelete.classList.add("delete");
        newTrackDelete.innerHTML = "<i class='fas fa-trash'></i>";
        newTrackControlls.appendChild(newTrackDelete);

        //creates beat div
        const newTrackBeatSection = document.createElement("div");
        newTrackBeatSection.classList.add(`${creatorSelection}`);
        newTrack.appendChild(newTrackBeatSection);

        //creates pads
        for (let i = 0; i < 8; i++) {
            const newTrackPads = document.createElement("div");
            newTrackPads.setAttribute("data-track", `${creatorSelection}-${this.trackAmount}`);
            newTrackPads.classList.add("pads");
            newTrackPads.classList.add(`${creatorSelection}-pad`);
            newTrackPads.classList.add(`p${i}`);
            newTrackBeatSection.appendChild(newTrackPads);
        }

        //creates audio tag
        const newAudioTag = document.createElement("audio");
        newAudioTag.setAttribute("id", `${creatorSelection}-${this.trackAmount}`);
        newAudioTag.setAttribute("src", `./sounds/${creatorSelection}-808.wav`);
        newAudioTag.volume = this.volumeLvl / 100;

        //appends to main div (this.trackAmount + 1) is for infinite tracks & added afterwards
        let trackCount = this.trackAmount + 1;
        this.audios.appendChild(newAudioTag, this.tracks.children[trackCount]);
        this.tracks.appendChild(newTrack, this.tracks.children[trackCount]);

    }

    deleteTrack(selectedTrack) {
        let deleteTrackValue = selectedTrack.target.getAttribute("data-track");
        let trackName = deleteTrackValue.replace('-', '');

        document.querySelector(`#${deleteTrackValue}`).remove();
        document.querySelector(`#${trackName}`).classList.add("fall");


        document.querySelector(`#${trackName}`).addEventListener("transitionend", (event) => {
            event.target.remove();
        });

    }

    volumeAdjust(currentVolumeLvl) {
        this.masterVolume = document.querySelectorAll("audio");

        this.volumeLvl = currentVolumeLvl.target.value;
        this.masterVolume.forEach((currentAudioTarget) => {
            currentAudioTarget.volume = this.volumeLvl / 100;
        });
    }

    volumeDisplay(volumeLvl) {
        this.volumeDsiplay.innerHTML = volumeLvl.target.value;
    }

    mute(e) {
        const muteTrack = e.target.getAttribute("data-track");
        e.target.classList.toggle("active");

        if (e.target.classList.contains("active")) {
            document.getElementById(muteTrack).volume = 0;
        }
        else {
            document.getElementById(muteTrack).volume = this.volumeLvl / 100;
        }
    }

    soundChange(selection) {
        let selectionValue = selection.target.value;
        const dataTrack = selection.target.getAttribute("data-track");
        let trackName = document.getElementById(`${dataTrack}`);

        if (!selection.target.classList.contains("add-new-track")) {
            trackName.src = selectionValue;
            console.log(trackName.src);
        }

    }

    tempoValue(speed) {
        this.tempoDisplay.innerHTML = speed.target.value;
    }

    tempo(speed) {
        clearInterval(this.isPlaying);
        this.bpm = speed.target.value;
        this.isPlaying = null;

        if (this.playBtnIcon.classList.contains("fa-stop")) {
            this.start();
        }
    }

    repeater() {
        let beatTracker = this.beatIndex % 8;
        const activeBar = document.querySelectorAll(`.p${beatTracker}`);
        this.beatIndex++;

        activeBar.forEach(bar => {
            // .animation(name of keyframes, animation speed, direction, easing, iteration count)
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            bar.addEventListener("animationend", () => {
                bar.style.animation = "none";
            });

            if (bar.classList.contains("active")) {
                const padValue = bar.getAttribute("data-track");
                let playAudio = document.querySelector(`#${padValue}`);

                playAudio.currentTime = 0;
                playAudio.play();
            }
        });

    }

    start() {

        // set speed of "setInterval" exacutions (milliseconds)
        let interval = (60 / this.bpm) * 1000;

        if (this.isPlaying) {
            this.playBtnIcon.classList.remove("fa-stop");
            this.playBtnIcon.classList.add("fa-play");

            clearInterval(this.isPlaying);
            this.isPlaying = null;
            this.beatIndex = 0;
        } else {
            this.playBtnIcon.classList.add("fa-stop");
            this.playBtnIcon.classList.remove("fa-play");

            this.isPlaying = setInterval(() => {
                this.repeater();
            }, interval);
        }
    }
}

const kit = new Drumkit();

kit.tracks.addEventListener("click", (event) => {

    if (event.target.classList.contains("mute")) {
        kit.mute(event);
    }

    if (event.target.tagName === "SELECT") {
        kit.soundChange(event);
    }

    if (event.target.classList.contains("pads")) {
        event.target.classList.toggle("active");
    }

    if (event.target.classList.contains("delete")) {
        kit.deleteTrack(event);
    }
});

kit.playBtn.addEventListener("click", () => {
    kit.start();
});

kit.volumeSlider.addEventListener('change', (volumeLvl) => {
    kit.volumeAdjust(volumeLvl);
});

kit.volumeSlider.addEventListener('input', (volumeLvl) => {
    kit.volumeDisplay(volumeLvl);
});

kit.tempoSlider.addEventListener('input', (speed) => {
    kit.tempoValue(speed);
});

kit.tempoSlider.addEventListener('change', (speed) => {
    kit.tempo(speed);
});

kit.creatorBtn.addEventListener("click", () => {
    kit.fileRetreave();
});