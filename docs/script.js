function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Placeholder para gráficos interactivos con Altair o D3.js
document.addEventListener("DOMContentLoaded", () => {
  createSpecialistsChart();
  createAgingChart();
});

function createSpecialistsChart() {
  const chartPlaceholder = document.getElementById('specialistsChart');
  chartPlaceholder.innerHTML = '<p>Gráfico interactivo de Tasa de Especialistas (Placeholder)</p>';
}

function createAgingChart() {
  const chartPlaceholder = document.getElementById('agingChart');
  chartPlaceholder.innerHTML = '<p>Gráfico interactivo de Envejecimiento por Región (Placeholder)</p>';
}
