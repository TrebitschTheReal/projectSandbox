<template>
    <div class="customBG container-fluid">



        <div class="">
            <div class="pt-5 px-5 pb-2">
                <div class="mb-5">
                    <p class="display-3 text-secondary text-justify font-weight-normal text-uppercase">Fenix® 5 Plus</p>
                    <p class="text-white text-justify font-weight-bold text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>


            <div class="btn container-fluid" :class="{hoverBG: openedOrNot[index]}" v-for="(item, index) in dataForProject" :sendTheCarouselPosition="currentAccordion" @click="onShowStart(index)">
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
</template>

<script>
    import myDataBase from '../data2'
    import { sendAccordionData } from '../main'
    import { sendCarouselData } from '../main'

    export default {

        data() {
            return {
                dataForProject: myDataBase,
                currentAccordion: 0,
                openedOrNot:[],
                attachGray: true,
                icon: "angle-down",
            }
        },

        methods:{
            onShowStart: function (accordionIndex) {
                sendAccordionData.$emit('sendTheAccordionlPosition', accordionIndex);
            },

        },

        beforeMount(){
            this.openedOrNot[0] = true;
        },

        created() {
            sendCarouselData.$on('sendTheCarouselPosition', (slide) => {
                this.currentAccordion = slide;
                this.openedOrNot[slide] = true;
            } );
        },
    }
</script>

<style scoped>


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