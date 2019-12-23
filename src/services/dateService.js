import moment from "moment";

const format = (moment) => moment.format("DD MMM YYYY");
const getDaysList = () => new Array(31).fill(0).map((_, i) => i + 1);
const getMonthsList = () => moment.months();
const getYearsList = ({ yearsBefore, yearsAfter }) => {
    let yearsBeforeCount = yearsBefore;
    let yearsAfterCount = yearsAfter;

    const years = [];

    while (yearsBeforeCount > 0) {
        years.push(moment().subtract(yearsBeforeCount, "year"));
        yearsBeforeCount--;
    }

    years.push(moment());

    const yearsAfterArr = [];

    while (yearsAfterCount > 0) {
        yearsAfterArr.push(moment().add(yearsAfterCount, "year"));
        yearsAfterCount--;
    }

    years.push(...yearsAfterArr.reverse());

    return years.map(x => x.year());
}

export { format, getDaysList, getMonthsList, getYearsList };