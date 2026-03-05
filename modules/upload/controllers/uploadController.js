import cloudinary from '../../../config/cloudinary.js';

/**
 * @desc    Upload single image to Cloudinary
 * @route   POST /api/upload
 * @access  Private/Admin
 */
export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload a file' });
        }

        // Upload to Cloudinary using buffer
        const streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: 'portfolio' },
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
                stream.end(req.file.buffer);
            });
        };

        const result = await streamUpload(req);

        res.status(200).json({
            message: 'Image uploaded successfully',
            url: result.secure_url,
            public_id: result.public_id
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc    Upload multiple images to Cloudinary
 * @route   POST /api/upload/multiple
 * @access  Private/Admin
 */
export const uploadMultipleImages = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'Please upload files' });
        }

        const uploadPromises = req.files.map((file) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: 'portfolio' },
                    (error, result) => {
                        if (result) {
                            resolve(result.secure_url);
                        } else {
                            reject(error);
                        }
                    }
                );
                stream.end(file.buffer);
            });
        });

        const urls = await Promise.all(uploadPromises);

        res.status(200).json({
            message: 'Images uploaded successfully',
            urls
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
