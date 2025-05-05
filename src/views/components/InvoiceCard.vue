<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
</script>
<template>
  <div class="card pb-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Facturas</h6>
        </div>
        <div class="col-6 text-end">
          <argon-button color="success" size="sm" variant="outline"
            >Ver todo</argon-button
          >
        </div>
      </div>
    </div>
    <div class="card-body p-3 pb-0 mb-0">
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">
              1 de marzo de 2025
            </h6>
            <span class="text-xs">#MS-415646</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $180.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              10 de febrero de 2025
            </h6>
            <span class="text-xs">#RV-126749</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $250.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              5 de abril de 2025
            </h6>
            <span class="text-xs">#FB-212562</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $5.600.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              25 de junio de 2025
            </h6>
            <span class="text-xs">#QW-103578</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $1.200.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              1 de marzo de 2025
            </h6>
            <span class="text-xs">#AR-803481</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $300.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
