import { ref } from 'vue';

export default function useAlert(alertVisibility = false) {
  const alertIsVisible = ref(alertVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
