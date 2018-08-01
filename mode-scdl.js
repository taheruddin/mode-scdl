"use strict";

const ModeScdl = {
    days: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],

    scdl: {},

    getDecimalHour: time => {
        if (time == null){
            return 0;
        }
        const sixtyMal = time.split(':');
        return Number(sixtyMal[0]) + Number(sixtyMal[1])/60 + Number(sixtyMal[2])/3600;
    },

    getDuration: (setIn, setOut) => {
        if (setIn && setOut) {
            const setInDec = ModeScdl.getDecimalHour(setIn);
            const setOutDec = ModeScdl.getDecimalHour(setOut);
            return setOutDec - setInDec;
        } else {
            return 0;
        }
    },

    getSession: (mode, setIn, setOut) => {
        return {
            mode: mode,
            duration: ModeScdl.getDuration(setIn, setOut)
        };
    },

    getSchedule: data => {
        ModeScdl.days.forEach(day => {
            ModeScdl.scdl[day] = [];
            if (data[0][day]) {
                ModeScdl.scdl[day].push(ModeScdl.getSession('eco', "00:00:00", data[2][day]));
                ModeScdl.scdl[day].push(ModeScdl.getSession(data[2].MODE, data[2][day], data[0][day]));
                ModeScdl.scdl[day].push(ModeScdl.getSession(data[0].MODE, data[0][day], data[3][day]));
                ModeScdl.scdl[day].push(ModeScdl.getSession(data[3].MODE, data[3][day], data[1][day]));
                ModeScdl.scdl[day].push(ModeScdl.getSession(data[1].MODE, data[1][day], "24:00:00"));
            } else {
                ModeScdl.scdl[day].push(ModeScdl.getSession('eco', "00:00:00", "24:00:00"));
            }


        });
        return ModeScdl.scdl;
    },

    getElem: (mode, duration) => {
        const elem = document.createElement('div');
        elem.style.width = (duration / 24 * 100) + '%';
        elem.className = mode.toLowerCase();
        return elem;
    },

    render: (data, elemId) => {
        const scdl = ModeScdl.getSchedule(data);
        const scdlElem = document.getElementById(elemId);
        ModeScdl.days.forEach(day => {
            const elem = document.createElement('div');
            elem.className = day.toLowerCase();
            scdl[day].forEach(session => {
                elem.appendChild(ModeScdl.getElem(session.mode, session.duration));
            });
            scdlElem.appendChild(elem);
        });
    }
};
