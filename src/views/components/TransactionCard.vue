<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
</script>
<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Transacción</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <i class="far fa-calendar-alt me-2" aria-hidden="true"></i>
          <small>23 - 30 Marzo 2025</small>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">
        Reciente
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="danger"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Venta 1</h6>
              <span class="text-xs">27 Marzo 2025,  12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
          >
            - $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Venta 2</h6>
              <span class="text-xs">27 Marzo 2025,  04:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,000
          </div>
        </li>
      </ul>
      <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">
        Ayer
      </h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">producto 1</h6>
              <span class="text-xs">26 Marzo 2025, 13:45 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 750
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">producto 2</h6>
              <span class="text-xs">26 Marzo 2025, 12:30 PM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 1,000
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Producto 3</h6>
              <span class="text-xs">26 Marzo 2025, 08:30 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <argon-button
              color="dark"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-exclamation" aria-hidden="true"></i>
            </argon-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Flujo web</h6>
              <span class="text-xs">26 Marzo 2025, 05:00 AM</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-dark text-sm font-weight-bold"
          >
            Pendiente
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
