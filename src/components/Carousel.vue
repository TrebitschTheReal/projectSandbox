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
       <b-link :href="'#' + myAnchor" @click="getSlideInfoForAnchor()" v-model="currentSlide">Link</b-link>
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
               myAnchor: 4,
            }
        },
        methods: {
            onSlideStart(slide) {
               this.myAnchor = this.currentSlide;
               sendCarouselData.$emit('sendTheCarouselPosition', slide);
            },

           getSlideInfoForAnchor() {
               this.currentSlide = this.myAnchor;
           }
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