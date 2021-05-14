const template = document.createElement('template');
template.innerHTML = `
  <style>
  .m-custom-audio {
    display: inline-block;
    position: relative;
    width: auto;
    height: 54px;
    background: #eee;
    border-radius: 27px;
  }
  .m-custom-audio .m-mask {
    position: absolute;
    width: calc(100% - 11px * 2);
    height: 32px;
    top: 19px;
    left: 11px;
    border-radius: 16px;
    z-index: 1;
    pointer-events: none;
  }
  .m-custom-audio .m-mask-inner {
    position: absolute;
    width: calc(100% - 19px * 2);
    height: 16px;
    top: 19px;
    left: 19px;
    border-radius: 8px;
    z-index: 1;
    pointer-events: none;
  }
  .m-custom-audio .m-c-audio {
    outline: none;
  }
  .m-custom-audio .m-c-extend {
    height: 32px;
    border-radius: 16px;
    margin: 11px 11px 0 -11px;
    z-index: 1;
    transform: translateZ(1px);
  }
  .m-custom-audio .m-c-extend .m-c-extend-item {
    border-radius: 16px;
    height: 32px;
    transition: background 0.3s;
  }
  .m-custom-audio .m-c-extend .m-c-extend-item:hover {
    background: #e2e2e2;
  }
  .m-custom-audio .m-c-extend .u-select-speed {
    border: 0;
    border-radius: 16px;
    width: 48px;
    height: 32px;
    background: transparent;
    text-align: center;
    text-align-last: center;
    outline: none;
    -webkit-appearance: none;
    font-size: 14px;
  }

  .f-cb:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }

  .f-cb {
    zoom: 1;
  }

  .f-fl {
    float: left;
  }

  audio::-webkit-media-controls-play-button,
  audio::-webkit-media-controls-panel {
    background-color: #eee;
    border: 0;
  }

  /*# sourceMappingURL=styles.css.map */

  </style>

  <div class="m-custom-audio f-cb">
    <div class="m-mask"></div>
    <div class="m-mask-inner"></div>
    <audio class="m-c-audio f-fl" controls>
      Your browser does not support the audio element.
    </audio>
    <div class="m-c-extend f-fl">
      <div class="m-c-extend-item f-fl">
        <select class="u-select-speed">
          <option value="2">2.0X</option>
          <option value="1.5">1.5X</option>
          <option value="1.25">1.25X</option>
          <option value="1" selected>倍速</option>
          <option value="0.5">0.5X</option>
        </select>
      </div>
    </div>
  </div>
`;

export class WCSAudioSpeed extends HTMLElement {
  static get observedAttributes() {
    return ['source'];
  }

  get source() {
    return this._source;
  }

  set source(value) {
    this._source = value;
    this.audioEl.src = this.source;
  }

  constructor() {
    super();

    this.root = this.attachShadow({
      mode: 'open'
    });
    this.root.appendChild(template.content.cloneNode(true));

    this.audioEl = this.root.querySelector('audio');
    this.speedSelectEl = this.root.querySelector('select');

    this.audioEl.src = this.source;
    this.speedSelectEl.addEventListener('change', this.speedChangeEvt.bind(this));
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'source' && this.audioEl) {
      this.source = newValue;
    }
  }

  speedChangeEvt(e) {
    this.audioEl.playbackRate = e.target.value;
  }
}

customElements.define('wcs-audio-speed', WCSAudioSpeed);