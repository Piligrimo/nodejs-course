export const getNotFoundError = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Oops! Not found!' })
}