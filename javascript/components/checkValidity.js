const checkValidity = (target) => {
    const validityInfo = document.querySelector(`#${target.id} + span`)
    target.validity.valid ? validityInfo.classList.remove('invalid') : validityInfo.classList.add('invalid');
}
export default checkValidity;