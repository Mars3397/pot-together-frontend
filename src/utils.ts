export const formatTime = (timeInSeconds: number): string => {
    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
