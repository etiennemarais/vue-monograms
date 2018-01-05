<template>
    <svg class="monogram" :style="fillColor" :width="width" :height="height">
        <polygon :points="monogramPoints" />
        <text class="text" x="50%" y="52%" alignment-baseline="middle" text-anchor="middle">
            {{ letters }}
        </text>
    </svg>
</template>

<script>
export default {
    name: 'Monogram',
    props: [
        'width',
        'letters',
        'primaryColor'
    ],
    data() {
        return {
            fillColor: {
                fill: this.primaryColor
            }
        }
    },
    methods: {
        calculatePointsForHexagon() {
            var points = [
                [ parseFloat((this.width / 2).toFixed(2)), 0 ],
                [ parseFloat(this.width), parseFloat((this.width / Math.sqrt(3) / 2).toFixed(2)) ],
                [ parseFloat(this.width), parseFloat((this.width / Math.sqrt(3) + (this.width / Math.sqrt(3) / 2)).toFixed(2)) ],
                [ parseFloat((this.width / 2).toFixed(2)), parseFloat((this.width /Math.sqrt(3) * 2).toFixed(2)) ],
                [ 0, parseFloat((this.width / Math.sqrt(3) + (this.width / Math.sqrt(3) / 2)).toFixed(2)) ],
                [ 0, parseFloat((this.width / Math.sqrt(3) / 2).toFixed(2)) ],
            ];

            return points.join(' ');
        }
    },
    computed: {
        monogramPoints: function() {
            return this.calculatePointsForHexagon();
        },
        height: function() {
            return parseFloat((this.width /Math.sqrt(3) * 2).toFixed(2));
        }
    }
}
</script>

<style lang="scss" scoped>
// Feel free to remove the scoped scss. Acts as a starting point
$black: hsl(0, 0%, 4%) !default;
$weight-bold: 700 !default;
$family-serif: Constantia, "Lucida Bright", "Lucidabright", "Lucida Serif", "Lucida", "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;
$text-2xl: 1.5rem;

.monogram {
    .text {
        fill: $black;
        font-family: $family-serif;
        font-weight: $weight-bold;
        font-size: $text-2xl;
    }
}
</style>
