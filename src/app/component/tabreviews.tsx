import React from 'react'
import Review from './reviews-cart/page'

export default function Tabreviews() {
  return (
    <div>
      <div className="flex flex-wrap pl-[80px] gap-6">
        {/* Pass the required props */}
        <Review
          rating={4}
          name="Samantha D."
          review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          date="2024-12-01"
        />
        <Review
          rating={4}
          name="Ethan R."
          review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          date="2024-12-01"
        />
        <Review
          rating={4}
          name="Liam K."
          review="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
          date="2024-12-01"
        />
        <Review
          rating={4}
          name="Alex M."
          review="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
          date="2024-12-01"
        />
        <Review
          rating={4}
          name="Olivia P."
          review="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
          date="2024-12-01"
        />
        <Review
          rating={5}
          name="Ava H."
          review="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
          date="2024-11-28"
        />
      </div>
    </div>
  )
}
