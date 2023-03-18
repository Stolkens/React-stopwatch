import styles from './Timer.module.scss';



const Timer = ({ time }) => {
  const formateTime = milliseconds =>{
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
    const formattedMilliseconds = milliseconds.toString().substr(-3).padStart(3, "0");
    const formatedTime =  formattedHours + ':'+ formattedMinutes +':'+ formattedSeconds + '.' + formattedMilliseconds;
    return formatedTime
  }
   
    
  


  return (
      <h1 className={styles.timer}>{formateTime(time)}</h1>
  );
};


export default Timer;