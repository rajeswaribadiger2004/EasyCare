function toggleFields() {
    const role = document.getElementById("role").value;
    document.getElementById("doctorFields").style.display = role === "doctor" ? "block" : "none";
    document.getElementById("patientFields").style.display = role === "patient" ? "block" : "none";
}
