.main-container {
  /* ... previous styles ... */
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.rotate {
  transform: rotateY(180deg); /* Adjust the rotation angle as needed */
}

.top-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Adjust the image's positioning within the container */
  backface-visibility: hidden;
}

.partitions {
  /* ... previous styles ... */
}

.partition {
  /* ... previous styles ... */
}
