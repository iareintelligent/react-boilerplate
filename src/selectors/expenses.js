export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createdAt <= endDate;
            // const textMatch = expense.toLowerCase().includes(text) ? text : false;
            const textMatch = expense.description.toLowerCase().includes(text);

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "amount":
                    console.log("sorting by amount");
                    return b.amount - a.amount;
                case "date":
                    return a.createdAt - b.createdAt;
            }
        });
};
