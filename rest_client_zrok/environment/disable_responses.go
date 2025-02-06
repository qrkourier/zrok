// Code generated by go-swagger; DO NOT EDIT.

package environment

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// DisableReader is a Reader for the Disable structure.
type DisableReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DisableReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDisableOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewDisableUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewDisableInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /disable] disable", response, response.Code())
	}
}

// NewDisableOK creates a DisableOK with default headers values
func NewDisableOK() *DisableOK {
	return &DisableOK{}
}

/*
DisableOK describes a response with status code 200, with default header values.

environment disabled
*/
type DisableOK struct {
}

// IsSuccess returns true when this disable o k response has a 2xx status code
func (o *DisableOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this disable o k response has a 3xx status code
func (o *DisableOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this disable o k response has a 4xx status code
func (o *DisableOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this disable o k response has a 5xx status code
func (o *DisableOK) IsServerError() bool {
	return false
}

// IsCode returns true when this disable o k response a status code equal to that given
func (o *DisableOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the disable o k response
func (o *DisableOK) Code() int {
	return 200
}

func (o *DisableOK) Error() string {
	return fmt.Sprintf("[POST /disable][%d] disableOK ", 200)
}

func (o *DisableOK) String() string {
	return fmt.Sprintf("[POST /disable][%d] disableOK ", 200)
}

func (o *DisableOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDisableUnauthorized creates a DisableUnauthorized with default headers values
func NewDisableUnauthorized() *DisableUnauthorized {
	return &DisableUnauthorized{}
}

/*
DisableUnauthorized describes a response with status code 401, with default header values.

invalid environment
*/
type DisableUnauthorized struct {
}

// IsSuccess returns true when this disable unauthorized response has a 2xx status code
func (o *DisableUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this disable unauthorized response has a 3xx status code
func (o *DisableUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this disable unauthorized response has a 4xx status code
func (o *DisableUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this disable unauthorized response has a 5xx status code
func (o *DisableUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this disable unauthorized response a status code equal to that given
func (o *DisableUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the disable unauthorized response
func (o *DisableUnauthorized) Code() int {
	return 401
}

func (o *DisableUnauthorized) Error() string {
	return fmt.Sprintf("[POST /disable][%d] disableUnauthorized ", 401)
}

func (o *DisableUnauthorized) String() string {
	return fmt.Sprintf("[POST /disable][%d] disableUnauthorized ", 401)
}

func (o *DisableUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDisableInternalServerError creates a DisableInternalServerError with default headers values
func NewDisableInternalServerError() *DisableInternalServerError {
	return &DisableInternalServerError{}
}

/*
DisableInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type DisableInternalServerError struct {
}

// IsSuccess returns true when this disable internal server error response has a 2xx status code
func (o *DisableInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this disable internal server error response has a 3xx status code
func (o *DisableInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this disable internal server error response has a 4xx status code
func (o *DisableInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this disable internal server error response has a 5xx status code
func (o *DisableInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this disable internal server error response a status code equal to that given
func (o *DisableInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the disable internal server error response
func (o *DisableInternalServerError) Code() int {
	return 500
}

func (o *DisableInternalServerError) Error() string {
	return fmt.Sprintf("[POST /disable][%d] disableInternalServerError ", 500)
}

func (o *DisableInternalServerError) String() string {
	return fmt.Sprintf("[POST /disable][%d] disableInternalServerError ", 500)
}

func (o *DisableInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
DisableBody disable body
swagger:model DisableBody
*/
type DisableBody struct {

	// identity
	Identity string `json:"identity,omitempty"`
}

// Validate validates this disable body
func (o *DisableBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this disable body based on context it is used
func (o *DisableBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *DisableBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *DisableBody) UnmarshalBinary(b []byte) error {
	var res DisableBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
