module.exports = function cmp (a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    while (pa.length != 3) {
      pa.push('0');
    }
    while (pb.length != 3) {
      pb.push('0');
    }
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
};
