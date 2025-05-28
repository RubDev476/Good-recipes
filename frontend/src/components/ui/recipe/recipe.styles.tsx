import styled from "styled-components";

export const RecipeContainer = styled.div`
    *:after,
    *:before {
        box-sizing: border-box;
    }

    display: block;
    max-width: 100%;
    margin: 40px auto 0;
    padding: 0 1rem;
    background-color: transparent;

    @media (min-width: 992px) {
        max-width: 74.375rem;
        display: grid;
        grid-template-columns: calc(67% - 5rem) minmax(33%, 24.375rem);
        grid-template-rows: auto auto;
        gap: 0 5rem;
        grid-auto-flow: row;
        justify-content: space-between;
        grid-template-areas:
      "top top"
      "main aside"
      "footer aside";
    }
`;

export const RecipeMain = styled.main`
    display: flex;
    flex-direction: column;

    .recipe__image {
        position: relative;
        *margin: auto;
        max-width: 400px;

        img {
            display: block;
            max-width: 100%;
            height: auto;
        }
    }

    .recipe__texts .description p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-3);
        display: inline;
    }
    
    
    .ingredients__title {
        font-size: 1.375rem;
        font-weight: 800;
        margin-bottom: 0.75rem;
        color: var(--color-2);
    }
    
    .ingredients ul {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;
        width: 100%;
    }

    .ingredients ul li {
        padding-bottom: 0.5rem;
        margin-bottom: 0.75rem;
        border-bottom: 1px solid var(--color-8);
        position: relative;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    .ingredients ul li input[name="checkDone"] {
        display: none;
    }

    .ingredients ul li label[class="checkDone"] {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: var(--color-3);
    }

    .ingredients ul li label[class="checkDone"] {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: var(--color-3);
    }

    .ingredients ul li label[class="checkDone"]::before {
        content: "";
        display: block;
        background-color: transparent;
        border: 2px solid var(--color-1);
        padding: 7px;
        position: relative;
        cursor: pointer;
        border-radius: 0.25rem;
        margin-right: 0.75rem;
        height: 1.125rem;
        width: 1.125rem;
    }

    .ingredients
    ul
    li
    input[name="checkDone"]:checked
    + label[class="checkDone"]::before {
        background-color: var(--color-1);
        background-image: url(https://www.recetasnestle.com.mx/themes/custom/cookit/Content/img/svgs/check-v3-white.svg?v=4098);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .ingredient__steps .ingredients__title {
        margin-top: 0;
    }

    @media (min-width: 992px) {
        grid-area: main;

        .ingredients__title {
            width: 100%;
            font-size: 2rem;
        }
        
        .ingredient__steps .cook__item__title {
            font-size: 1.375rem;
        }
    }
`;

export const RecipeSidebar = styled.aside`
    .recipe__section__header {
        margin-bottom: 1rem;

        h2 {
            font-size: 1.375rem;
            font-weight: 800;
            color: var(--color-2);
            margin: 0;
        }
    }

    .recipe__section__content {
        .recipe__section__list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }

    .recipe__section__content .card__recipe {
        display: block;
        position: relative;
        width: 100%;
        text-decoration: none;
    }

    .recipe__section__content .card__recipe .card__recipe__image {
        position: relative;
        margin-bottom: 0.75rem;
        border-radius: 0.75rem;
        overflow: hidden;

        img {
            border-radius: 0.75rem;
            width: 100%;
            height: 10.6875rem;
            object-fit: cover;
            object-position: center;
            margin-bottom: 0;
        }
    }

    .recipe__section__content .card__recipe .card__recipe__title {
        height: auto;
        font-size: 14px;
        line-height: 1.2;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;
        color: var(--color-3);
        font-weight: 700;
        margin-bottom: 0;
    }

    .recipe__section__content .card__recipe .card__recipe__information {
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        position: absolute;
        top: calc(10.6875rem - 1.3rem);
        gap: 0;
        margin: 0;

        .info__difficulty,
        .info__time {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--color-7);
        }
    }

    .recipe__section__content .card__recipe .card__recipe__information li {
        padding: 0 1rem;
    }

    @media (min-width: 992px) {
        grid-area: aside;

        .recipe__section__header {
            h2 {
                font-size: 1.75rem;
            }
        }

        .recipe__section__content {
            .recipe__section__list {
                grid-template-columns: 1fr;
                gap: 0;
            }
        }

        .recipe__section__content .card__recipe:not(:last-of-type) {
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--color-6);
        }

        .recipe__section__content .card__recipe {
            display: grid;
            grid-template-columns: 5.625rem calc(100% - 6.125rem);
            grid-template-rows: 5.625rem;
            gap: 0 0.5rem;
            padding-bottom: 1rem;
        }

        .recipe__section__content .card__recipe .card__recipe__image {
            margin-bottom: 0;

            img {
                height: 5.625rem;
                width: 5.625rem;
            }
        }

        .recipe__section__content .card__recipe .card__recipe__title {
            right: 0;
            top: 12rem;
            height: calc(2 * 1.2em);
            font-size: 18px;
            line-height: 1.2;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            white-space: normal;
        }

        .recipe__section__content .card__recipe .card__recipe__information {
            font-size: 0.875rem;
            color: #757575;
            padding: 0;
            top: initial;
            right: 0;
            bottom: calc(1.75rem);
            width: calc(100% - 6.125rem);
        }

        .recipe__section__content .card__recipe .card__recipe__information li {
            padding: 0;
        }
    }
`;

export const RecipeFooter = styled.section`
    margin-bottom: 3rem;

    .recipe__comments__title {
        font-weight: bold;
        font-size: 1.5rem;
        color: var(--color-2);
        margin-bottom: 1.25rem;
    }

    .recipe__comments__login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2.5rem;
    }

    .recipe__comments__login__description {
        font-size: 1rem;
        font-weight: 800;
        text-align: center;
    }

    .recipe__comments__login__actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 1rem;
        column-gap: 1rem;
    }

    .recipe__comments__login__actions .btn {
        display: inline-flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 0 1.25rem;
        width: auto;
        font-size: 1rem;
        height: 2.5rem;
        transition: all 0.3s ease-in-out;
        border-radius: 50px;
        line-height: 1;
        cursor: pointer;
        text-decoration: none;
    }

    .recipe__comments__login__actions .btn-primary {
        color: var(--color-1);
        background: transparent;
        border: 1px solid var(--color-1);
    }

    .recipe__comments__login__actions .btn-secondary {
        color: var(--color-5);
        background: var(--color-1);
        border: 1px solid var(--color-1);
    }

    .recipe__comments__comment__container {
        width: 100%;
    }

    .recipe__comments__comment {
        padding: 1.5rem 0 0;
        margin-bottom: 1.5rem;
        display: flex;
        width: 100%;
        align-items: center;
    }

    .recipe__comments__comment .text {
        width: 5rem;
        flex: 0 0 5rem;
    }

    .recipe__comments__comment .text .name {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
        overflow: hidden;
    }

    .recipe__comments__comment .text .time {
        font-size: 0.75rem;
        margin-bottom: 0.375rem;
        color: var(--color-7);
    }

    .recipe__comments__comment .text .stars {
        display: flex;
    }

    .recipe__comments__comment .content {
        padding: 0 0 0 1rem;
    }

    .recipe__comments__comment .content p {
        font-size: 0.875rem;
    }

    @media (min-width: 992px) {
        grid-area: footer;

        .recipe__comments__login__description {
            font-size: 1.375rem;
        }
    }
`;
