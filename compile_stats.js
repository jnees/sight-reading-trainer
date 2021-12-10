const moment = require("moment");

/*-----------------------------------------------------------------
    Compile Stats Function.

    Calculates the summary statistics that are used in on the stats 
    page from the user's Attempt records. Used by the /user/stats 
    GET route.
    
    Args:
        results: the set of all of a user's Attempt records.

    Returns: 
        JSON object containing the summary statistics expected
        by the client for the Stats page.
------------------------------------------------------------------*/

module.exports = (results) => {
    const user_id = results[0].userID;
    
    // Total attempts stats
    const total_attempts = results.length;
    const correct_attempts = results.filter(obj => obj.correct).length;
    const total_accuracy = correct_attempts/total_attempts*100;
    
    // 1-day stats
    const oneDaysAgo = moment().subtract(1, 'days');
    const attempts1_results = results.filter(obj => obj.date >= oneDaysAgo);
    const attempts1 = attempts1_results.length;
    const correct_attempts1 = attempts1_results.filter(obj => obj.correct).length;
    const attempts1_accuracy = correct_attempts1/attempts1*100;

    // 7-day stats
    const sevenDaysAgo = moment().subtract(7, 'days');
    const attempts7_results = results.filter(obj => obj.date >= sevenDaysAgo);
    const attempts7 = attempts7_results.length;
    const correct_attempts7 = attempts7_results.filter(obj => obj.correct).length;
    const attempts7_accuracy = correct_attempts7/attempts7*100;

    // 30-day stats
    const thirtyDaysAgo = moment().subtract(30, 'days');
    const attempts30_results = results.filter(obj => obj.date >= thirtyDaysAgo);
    const attempts30 = attempts30_results.length;
    const correct_attempts30 = attempts30_results.filter(obj => obj.correct).length;
    const attempts30_accuracy = correct_attempts30/attempts30*100;

    // 90-day stats
    const ninetyDaysAgo = moment().subtract(90, 'days');
    const attempts90_results = results.filter(obj => obj.date >= ninetyDaysAgo);
    const attempts90 = attempts90_results.length;
    const correct_attempts90 = attempts90_results.filter(obj => obj.correct).length;
    const attempts90_accuracy = correct_attempts90/attempts90*100;

    return {
        userID: user_id,
         attempted1: attempts1, 
         accuracy1: attempts1_accuracy,
         attempted7: attempts7, 
         accuracy7: attempts7_accuracy,
         attempted30: attempts30, 
         accuracy30: attempts30_accuracy,
         attempted90: attempts90, 
         accuracy90: attempts90_accuracy,
         totalAttempts: total_attempts,
         correctAttempts: correct_attempts, 
         totalAccuracy: total_accuracy
        }
}