function LinearInterpolation(points) {
    return function (data) {
        var high = points.length - 1,
            low = 0,
            mid = parseInt((low + high) / 2);

        while (data >= points[low].x && data <= points[high].x) {
            if (data == points[low].x) {
                return points[low].y;
            }
            if (data == points[high].x) {
                return points[high].y;
            }
            if (high == low + 1) {
                var k = (points[high].y - points[low].y) / (points[high].x - points[low].x);
                var dy = k * (data - points[low].x);
                return points[low].y + dy;
            }
            if (points[mid].x > data) {
                high = mid;
            } else {
                low = mid;
            }
            mid = parseInt((high + low) / 2);
        }

        return null;
    };
}

export default {
    LinearInterpolation: LinearInterpolation
}
