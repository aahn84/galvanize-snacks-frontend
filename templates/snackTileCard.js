function snackCardGen(snack) {
  console.log(snack);
  return `<div class="column is-4">
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
