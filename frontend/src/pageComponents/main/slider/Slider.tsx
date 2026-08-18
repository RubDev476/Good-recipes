import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';

import { CardRecipe } from '../../../components/ui/CardRecipe/CardRecipe';

import { SliderContainer } from './slider.styles';
import type { SliderProps } from '../../../types/props';

export default function Slider({recipes, tag, sliderFeatures}: SliderProps) {
    return (
        <SliderContainer className="container">
            <Swiper
                spaceBetween={30}
                slidesPerView={sliderFeatures.slidesView}
                loop={true}
                pagination={sliderFeatures.pagination}
                navigation={sliderFeatures.navigation}
                modules={[Pagination, Navigation]}
            >
                {recipes.map((recipe) => {
                    const id = recipe.idMeal ?? recipe.idDrink;
                    const title = recipe.strMeal ?? recipe.strDrink;
                    const img = recipe.strMealThumb ?? recipe.strDrinkThumb;

                    if (!id || !title || !img) return null;
                    
                    return (
                        <SwiperSlide key={id}>
                            <CardRecipe tag={tag} title={title} img={img} id={id} country={recipe.strCountry} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SliderContainer>
    )
}