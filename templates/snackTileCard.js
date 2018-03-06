function snackCardGen(snack) {
  if (snack.name.length > 25) {
    snack.name = `${snack.name.slice(0,22)}...`
  }
  return `<div id="${snack.id}" onclick="clickedSnack(event)" class="col-sm-12 col-md-6 col-lg-4 column is-4">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  ${snack.name}
                </p>
                <span class="card-header-icon timestamp">
                  2m
                </span>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${snack.img}" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="panel-block-item">
                  <div class="avgRating">
                    <span id="avgStars" class="fa fa-star checked"></span>
                    <span id="avgStars" class="fa fa-star checked"></span>
                    <span id="avgStars" class="fa fa-star checked"></span>
                    <span id="avgStars" class="fa fa-star"></span>
                    <span id="avgStars" class="fa fa-star"></span>
                    <!-- 3.0/5.0 -->
                  </div>
                  <div class="reviews">
                    <span class="icon">
                      <i class="fa fa-comment"></i>
                    </span>
                    12k Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>`
}


      //   <div class="column is-4">
      //     <div class="card">
      //       <header class="card-header">
      //         <p class="card-header-title">
      //           snackname here!
      //         </p>
      //         <span class="card-header-icon timestamp">
      //           <!-- 12k Reviews -->
      //         </span>
      //       </header>
      //       <div class="card-image">
      //         <figure class="image is-4by3">
      //           <img src="https://placehold.it/1280x960" alt="Image">
      //         </figure>
      //       </div>
      //       <div class="card-content">
      //         <div class="panel-block-item">
      //           <div class="avgRating">
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             3.0/5.0
      //             <!-- <div class="icon"> -->
      //               <!-- <i class="fa fa-heart"></i> -->
      //               <!-- <span id="avgStars" class="fa fa-star checked"></span>
      //               <span id="avgStars" class="fa fa-star checked"></span>
      //               <span id="avgStars" class="fa fa-star checked"></span>
      //               <span id="avgStars" class="fa fa-star"></span>
      //               <span id="avgStars" class="fa fa-star"></span> -->
      //             <!-- </div> -->
      //             <!-- Avg Rating -->
      //           </div>
      //           <div class="reviews">
      //             <!-- <span class="icon">
      //               <i class="fa fa-comment"></i>
      //             </span> -->
      //             12k Reviews
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //
      //   <div class="column is-4">
      //     <div class="card">
      //       <header class="card-header">
      //         <p class="card-header-title">
      //           snackname here!
      //         </p>
      //         <span class="card-header-icon timestamp">
      //           2m
      //         </span>
      //       </header>
      //       <div class="card-image">
      //         <figure class="image is-4by3">
      //           <img src="https://placehold.it/1280x960" alt="Image">
      //         </figure>
      //       </div>
      //       <div class="card-content">
      //         <div class="panel-block-item">
      //           <div class="avgRating">
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             <!-- 3.0/5.0 -->
      //           </div>
      //           <div class="reviews">
      //             <span class="icon">
      //               <i class="fa fa-comment"></i>
      //             </span>
      //             12k Reviews
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //
      //   <div class="column is-4">
      //     <div class="card">
      //       <header class="card-header">
      //         <p class="card-header-title">
      //           snackname here!
      //         </p>
      //         <span class="card-header-icon timestamp">
      //           2m
      //         </span>
      //       </header>
      //       <div class="card-image">
      //         <figure class="image is-4by3">
      //           <img src="https://placehold.it/1280x960" alt="Image">
      //         </figure>
      //       </div>
      //       <div class="card-content">
      //         <div class="panel-block-item">
      //           <div class="avgRating">
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star checked"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             <span id="avgStars" class="fa fa-star"></span>
      //             <!-- 3.0/5.0 -->
      //           </div>
      //           <div class="reviews">
      //             <!-- <span class="icon">
      //               <i class="fa fa-comment"></i>
      //             </span> -->
      //             12k Reviews
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
