import moment from "moment";

export default () => {
  if (!customElements.get('countdown-timer')) {
    class CountdownTimer extends HTMLElement {
      constructor() {
        super();
        const timezone = this.dataset.timezone,
          date = this.dataset.date.split('-'),
          day = parseInt(date[0]),
          month = parseInt(date[1]),
          year = parseInt(date[2]);

        let time = this.dataset.time,
          tarhour, tarmin;

        if (time != null) {
          time = time.split(':');
          tarhour = parseInt(time[0]);
          tarmin = parseInt(time[1]);
        }

        // Set the date we're counting down to
        let date_string = month + '/' + day + '/' + year + ' ' + tarhour + ':' + tarmin;
        // Time without timezone
        this.countDownDate = new Date(year, month - 1, day, tarhour, tarmin, 0, 0).getTime();
      }

      convertDateForIos(date) {
        var arr = date.split(/[- :]/);
        date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
      }
      connectedCallback() {
        const getConvertedTime = (dateInstance) => {
          const localTime = dateInstance.getTime();
          const convertedTime = moment(localTime).utcOffset('-0400').format('YYYY-MM-DD HH:mm:ss')
          return new Date(convertedTime);
        }
        let _this = this;
        const updateTime = function () {
          let now = new Date();
          now = getConvertedTime(now);
          const distance = _this.countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          if (distance < 0) {
            _this.querySelector('.days .countdown-timer--column--number').innerHTML = 0;
            _this.querySelector('.hours .countdown-timer--column--number').innerHTML = 0;
            _this.querySelector('.minutes .countdown-timer--column--number').innerHTML = 0;
            _this.querySelector('.seconds .countdown-timer--column--number').innerHTML = 0;
            // Add class to hide banner
            document.querySelector('.countdown-banner').classList.add('hide_banner');
          } else {
            requestAnimationFrame(updateTime);
            _this.querySelector('.days .countdown-timer--column--number').innerHTML = CountdownTimer.addZero(days);
            _this.querySelector('.hours .countdown-timer--column--number').innerHTML = CountdownTimer.addZero(hours);
            _this.querySelector('.minutes .countdown-timer--column--number').innerHTML = CountdownTimer.addZero(minutes);
            _this.querySelector('.seconds .countdown-timer--column--number').innerHTML = CountdownTimer.addZero(seconds);
          }
        };
        requestAnimationFrame(updateTime);
      }
      static addZero(x) {
        return (x < 10 && x >= 0) ? "0" + x : x;
      }
    }
    customElements.define('countdown-timer', CountdownTimer);
  }
}