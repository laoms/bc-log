let log = window.console.log
window.console.log = function (...arg) {
    log.apply(this, arg)
}