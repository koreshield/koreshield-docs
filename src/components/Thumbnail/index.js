"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var styles_module_scss_1 = require("./styles.module.scss");
var Thumbnail = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleOpen = function () { return setIsOpen(true); };
    var handleClose = function () { return setIsOpen(false); };
    return (<>
      <img src={src} alt={alt} width={width} height={height} className={styles_module_scss_1.default['main-img']} onClick={handleOpen} role="button" tabIndex={0} onKeyDown={function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                handleOpen();
            }
        }}/>
      <react_transition_group_1.CSSTransition in={isOpen} timeout={300} classNames={{
            enter: styles_module_scss_1.default['modal-enter'],
            enterActive: styles_module_scss_1.default['modal-enter-active'],
            exit: styles_module_scss_1.default['modal-exit'],
            exitActive: styles_module_scss_1.default['modal-exit-active'],
        }} unmountOnExit>
        <div className={styles_module_scss_1.default['modal']} onClick={handleClose}>
          <div className={styles_module_scss_1.default['modal-content']} onClick={function (e) { return e.stopPropagation(); }}>
            <button className={styles_module_scss_1.default['modal-close']} onClick={handleClose} aria-label="Close">
              ×
            </button>
            <img src={src} alt={alt} className={styles_module_scss_1.default['modal-img']}/>
          </div>
        </div>
      </react_transition_group_1.CSSTransition>
    </>);
};
exports.default = Thumbnail;
