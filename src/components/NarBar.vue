<template>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #5f9e71;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-left:20px;"><strong>VegVeg</strong></a>
    <b-button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </b-button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./">Explore</a>
        </li>
        <!-- <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Reviews</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">My Profile</a>
        </li> -->

      </ul>
      <b-form class="d-flex">
        <b-form-input class="me-sm-2" type="search" aria-label="Search"></b-form-input>
        <b-button variant="outline-success mx-3" style="color:white;" type="submit">Search</b-button>
      </b-form>
    </div>
  </div>
</nav>
</template>
