

<script>  
export let image_aspect_ratio;
export let image;
export let srcTokens; 
let min = 100 ;
let max = 10000;
let diff = max - min;
let generated_image_id = Date.now() / diff + min;
let image_id = image.id;
let max_height_image = image.height
let max_width_image =  image.width
const IMAGE_WIDTHS = [180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024]

 const getImageWidths = nativeWidth => {
  const imageWidths = [];
  for (let i = 0; i < IMAGE_WIDTHS.length; i++) {
    const width = IMAGE_WIDTHS[i];
    if (nativeWidth > width) {
      imageWidths.push(width);
    } else {
      imageWidths.push(nativeWidth);
      break;
    }
  }
  return imageWidths.join(',');
}

const imageWidth = getImageWidths(image.width);
const max_width_image_float = max_width_image * 1.0;
let urlTokens = srcTokens;
let uriEncodedSrc = `${encodeURI(image.src)}?width=300&height=300`;
let dataSrcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.dataSrcToken);
let srcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.srcToken);

 ((aspectRatio) => {
  if(aspectRatio <= 1 ) {
    max_height_image = image_height
     max_width_image = max_height_image * image_aspect_ratio 
  }
  else {
    max_height_image = max_width_image / image_aspect_ratio
  }
})();

const getWrapperStyles = () => {
    return `
    --padding-top: ${ (max_height_image / max_width_image_float) * 100}%;
    --max-height: ${ max_height_image }px;
    --max-width: ${ max_width_image }px;
    `
}

const getImageStyle = () => {
    return `
    max-width: ${ max_width_image }px;
    max-height: ${ max_height_image }px;
    object-fit: contain;`
}

</script>




<div id="ImageWrapper-{image_id}-{generated_image_id}" data-image-id="{ image_id }" class="responsive-image__wrapper" style={getWrapperStyles()}>
  <img id="Image-{image_id }-{generated_image_id}" 
    class="responsive-image__image lazyload"
    src={srcUrl}
    srcset="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/u3zfwAJrQPhbkYXzAAAAABJRU5ErkJggg=="
    data-src={dataSrcUrl}
    data-widths=[{imageWidth}]
    data-aspectratio="{image_aspect_ratio}"
    data-sizes="auto"
    tabindex="-1"
    style={getImageStyle()}
  >
</div>


<style>
.responsive-image__wrapper:before {
    content: '';
    width: 100%;
    display: block;
    padding-top: var(--padding-top);
}

.responsive-image__wrapper {
    max-width: var(--max-width);
    height: 100%;
    position: relative;
    max-height: var(--max-height);
    height: auto;
}

.responsive-image__image {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
}
</style>