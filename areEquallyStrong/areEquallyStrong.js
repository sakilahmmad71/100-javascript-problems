const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    const yourWeak = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrong = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeak = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrong = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrong === friendsStrong && yourWeak === friendsWeak;
};

module.exports = areEquallyStrong;
