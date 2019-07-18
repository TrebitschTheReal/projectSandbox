<template>
    <div>
        <b-carousel
                id="carousel-1"
                :interval="10000"
                v-model="currentSlide"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                @sliding-start="onSlideStart"
        >

            <b-carousel-slide v-for="(item, index) in dataForProject">
                <img
                        slot="img"
                        class="customPadding img-fluid w-100"
                        width="1024"
                        height="480"
                        :src="item.image_url"
                >
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import myDataBase from '../data2'
    import { sendAccordionData } from '../main'
    import { sendCarouselData } from '../main'


    export default {

        data() {
            return {
                currentSlide: 0,
                dataForProject: myDataBase,
            }
        },
        methods: {
            onSlideStart(slide) {
                sendCarouselData.$emit('sendTheCarouselPosition', slide);
            },
        },

        created() {
            sendAccordionData.$on('sendTheAccordionlPosition', (accordionIndex) => {
                this.currentSlide = accordionIndex;
            } );
        },
    }
</script>
<style>
    .customPadding{
        padding: 4rem;
    }
</style>