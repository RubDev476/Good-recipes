import { 
    BannerGradient,
    BannerImgCont,
    BannerSection, 
    BannerTitleCont
} from "./Banner.style"

type BannerProps = {
    title: string;
    img: string;
    tag: "category" | "categories";
}

export default function Banner({ title, img, tag }: BannerProps) {
    return (
        <BannerSection>
            <BannerImgCont>
                <img src={img} className='img' alt="Category banner" />
            </BannerImgCont>
            <BannerGradient />
            <BannerTitleCont>
                {tag === "categories" && <p>Browse</p>}
                <h1 className='font-display'>{title}</h1>
            </BannerTitleCont>
        </BannerSection>
    )
}