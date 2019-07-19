<template>
    <div id="app">
        <div class="row no-gutters">
            <div class="col">
                <b-carousel
                        id="carousel-1"
                        :interval="10000"
                        v-model="currentSlide"
                        controls
                        indicators
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        @sliding-start="changeAccordion"
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

            <div class="col">
                <div class="customBG container-fluid">
                    <div>
                        <div class="pt-5 px-5 pb-2">
                            <div class="mb-5">
                                <p class="display-3 text-secondary text-justify font-weight-normal text-uppercase">Fenix® 5 Plus</p>
                                <p class="text-white text-justify font-weight-bold text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div class="btn container-fluid"
                             v-for="(item, index) in dataForProject"
                             :class="{hoverBG: openedOrNot[index]}"
                             :sendTheCarouselPosition="currentAccordion"
                             @click="changeSlide(index)">
                            <div class="px-5 pt-1">
                                <div class="py-2">
                                    <div class="border-0 m-0 p-0" role="tab">
                                        <div class="blockquote text-uppercase text-justify font-weight-bolder textColor" block href="#" v-b-toggle="'accordion-' + index" variant="info">{{ item.title }}<span class="float-right"><font-awesome-icon :icon="icon" size="lg"/></span></div>
                                    </div>
                                    <b-collapse class="" :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel" v-model="openedOrNot[index]">
                                        <div class="py-1">
                                            <div class="text-white text-uppercase text-justify font-weight-bold">{{ item.content }}</div>
                                        </div>
                                    </b-collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myDataBase from './data2'

export default {

    data() {
        return {
            dataForProject: myDataBase,
            icon: "angle-down",
            currentSlide: 0,
            currentAccordion: 0,
            openedOrNot:[true],
        }
    },
    methods: {
        changeAccordion: function (slide) {
            this.currentAccordion = slide;
            this.openedOrNot[slide] = true;
        },
        changeSlide: function (accordionIndex) {
            this.currentSlide = accordionIndex;
        }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    #app {
        font-family: 'Roboto Condensed', sans-serif;
    }

    .customPadding{
        padding: 4rem;
    }

    .customBG{
        background-color: #1A1A1D;
    }

    .hoverBG{
        background-color: #4E4E50;
    }

    .textColor{
        color: #ADADAD;
    }

</style>
