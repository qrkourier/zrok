// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// LoginOKCode is the HTTP code returned for type LoginOK
const LoginOKCode int = 200

/*
LoginOK login successful

swagger:response loginOK
*/
type LoginOK struct {

	/*
	  In: Body
	*/
	Payload string `json:"body,omitempty"`
}

// NewLoginOK creates LoginOK with default headers values
func NewLoginOK() *LoginOK {

	return &LoginOK{}
}

// WithPayload adds the payload to the login o k response
func (o *LoginOK) WithPayload(payload string) *LoginOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the login o k response
func (o *LoginOK) SetPayload(payload string) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *LoginOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

// LoginUnauthorizedCode is the HTTP code returned for type LoginUnauthorized
const LoginUnauthorizedCode int = 401

/*
LoginUnauthorized invalid login

swagger:response loginUnauthorized
*/
type LoginUnauthorized struct {
}

// NewLoginUnauthorized creates LoginUnauthorized with default headers values
func NewLoginUnauthorized() *LoginUnauthorized {

	return &LoginUnauthorized{}
}

// WriteResponse to the client
func (o *LoginUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}
