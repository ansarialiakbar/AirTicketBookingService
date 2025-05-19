const {StatusCodes} = require('http-status-codes')

const {BookingService} = require('../services/index')

const bookingService = new BookingService()

const create = async(req, res) => {
    try {
        const response = await bookingService.createBooking(req.body)
        console.log('From Booking Controller', response);
        
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed booking',
            data: response,
            success: true,
            err: {}
        })
        
    } catch (error) {
        console.log('From Booking Controller', error);
        
        return res.status(error.statusCodes).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        })
        
    }

}

module.exports = {
    create
}
