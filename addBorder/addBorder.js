const addBorder = (pictures) => {
    const wall = pictures[0].length + 2;
    let borderWall = '';

    for (let i = 0; i < pictures.length; i++) {
        pictures[i] = '*'.concat(pictures[i], '*');
    }

    for (let i = 0; i < wall; i++) {
        borderWall += '*';
    }

    pictures.unshift(borderWall);
    pictures.push(borderWall);

    return pictures;
};

const addBorder2 = (pictures) => {
    const wall = '*'.repeat(pictures[0].length + 2);

    for (let i = 0; i < pictures.length; i++) {
        pictures[i] = '*'.concat(pictures[i], '*');
    }

    pictures.unshift(wall);
    pictures.push(wall);
    return pictures;
};

module.exports = { addBorder, addBorder2 };
